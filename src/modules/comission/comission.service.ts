import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { GlobalParamsDto } from "./dto/get-global-params.dto";
import { InsrtGoodDto } from "./dto/insrt-goods.dto";
import { GoodsPaidFromEventDto } from "./dto/get-goods-paid-from-event.dto";
import { PaidGoodsInDatesDto } from "./dto/get-paid-goods-In-dates.dto";
import { UpdtComissionDto } from "./dto/updt-comission.dto";
import { ComissionTotalDto } from "./dto/calc-comission-total.dto";
import { GoodsComissionDto } from "./dto/goods-comission.dto";
import { CalcCommissionDto } from "./dto/calc-comission.dto";
import { TotalSoldsDto } from "./dto/get-total-solds.dto";
import { ComissionRangeDto } from "./dto/calc-comission-range.dto";
import { PctSpecialDto } from "./dto/get-pct.dto";
import { ComissionSpecialRangeDto } from "./dto/comission-special-range.dto";
import { CentralCoordinateDto } from "./dto/central-coordinate.dto";
import { ComerComissionxbGoodEntity } from "./entities/comer-comission-x-good.entity";
import { ComerPaymentRefEntity } from "./entities/comer-payment-ref.entity";
import { ComerLotEntity } from "./entities/comer-lot.entity";
import { filter } from "rxjs";

@Injectable()
export class ComissionService {
  protected lbfLots = [];
  protected lbfPayment = [];
  protected lbfAux = [];

  constructor(
    @InjectRepository(ComerComissionxbGoodEntity)
    private entity: Repository<ComerComissionxbGoodEntity>,
    @InjectRepository(ComerLotEntity)
    private entityLot: Repository<ComerLotEntity>,
    @InjectRepository(ComerPaymentRefEntity)
    private entityPayment: Repository<ComerPaymentRefEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_comission_served") public counter: Counter<string>
  ) {}
  /*
		COORDINA LOS LLAMADOS A PROCESOS
	*/
  async centralCoordinate(data: CentralCoordinateDto) {}

  /*
		CALCULA LA COMISION EN UN RANGO ESPECIFICO ESPECIAL CASO EBAY
	*/
  async calculateCommissionSpecialRange(data: ComissionSpecialRangeDto) {
    const { comId1, tpCam1 } = data;
    const pctAux = await this.getPctComissionToSpecial({
      comId2: comId1,
      camTp2: tpCam1,
    });

    return await this.applyGoodsComission({
      comId3: comId1,
      camTp3: tpCam1,
      porc3: pctAux,
    });
  }

  /*
   	OBTIENE EL PCT DE COMISION PARA RANGO ESPECIAL
  */
  async getPctComissionToSpecial(data: PctSpecialDto): Promise<Number> {
    const { comId2, camTp2 } = data;
    let obpAmount = 0;
    let obpPctCom = 0;
    let obpStartAmount = 0;
    let obpEndAmount = 0;
    let obpAux = 0;
    let obpSubAux = 0;
    let i = 0;
    let obpEndPct = 0;
    const obp = await this.entity.query(`
      SELECT
        coalesce(C2.PCT_COMISION,0) as "startAmount",
        C2.MONTO_INI as "endAmount",
        coalesce(C2.MONTO_FIN, C2.MONTO_INI*5) as "pctCom"
      FROM
        sera.COMER_COMCALCULADA    C1,
        sera.COMER_COMI_X_TERCEROS C2
      WHERE
        C1.ID_COMCALCULADA = ${comId2}
        AND C1.ID_TERCEROCOMER = C2.ID_TERCEROCOMER
      ORDER BY
        C2.MONTO_INI DESC;
    `);
    const comXRange = [];
    obpAmount = await this.getTotalSolds({
      comId2: comId2,
      camTp2: camTp2,
    });

    for (const el of obp) {
      obpPctCom = el.pctCom;
      obpStartAmount = el.startAmount;
      obpEndAmount = el.endAmount;
      const body = {
        startAmount: obpStartAmount,
        endAmount: obpEndAmount,
        pctCom: obpPctCom,
        used: "N",
        saleAmount: 0.0,
      };
      comXRange.push(body);
      i++;
    }
    obpAux = obpAmount;

    for (const d of comXRange) {
      if (obpAux >= d.startAmount && obpAux <= d.endAmount) {
        obpSubAux = obpAux;
        d.used = "S";
        obpSubAux = obpSubAux - d.startAmount;
        d.saleAmount = obpSubAux;
        obpAux = obpAux - obpSubAux;
      }

      if (d.used == "S") {
        obpEndPct = obpEndPct + (d.saleAmount / obpAmount) * d.pctCom;
      }
    }

    return obpEndPct;
  }

  /*
    CALCULA LA COMISION EN UN RANGO ESPECIFICO
	*/
  async calculateCommissionRange(data: ComissionRangeDto) {
    const { comId1, camTp1 } = data;
    const crAmount = await this.getTotalSolds({
      comId2: comId1,
      camTp2: camTp1,
    });
    const crPctCom =
      (
        await this.entity.query(`
      SELECT
        coalesce (C2.PCT_COMISION,
        0) as "crPctCom"
      FROM
        COMER_COMCALCULADA    C1,
        COMER_COMI_X_TERCEROS C2
      WHERE
        C1.ID_COMCALCULADA = ${comId1}
        AND coalesce(C2.MONTO_FIN,
        ${crAmount}) >= ${crAmount}
        AND ${crAmount} >= C2.MONTO_INI
        AND C1.ID_TERCEROCOMER = C2.ID_TERCEROCOMER;
    `)
      )[0].crPctCom ?? 0;

    return await this.applyGoodsComission({
      comId3: comId1,
      camTp3: camTp1,
      porc3: crPctCom,
    });
  }

  /*
    OBTIENE EL TOTAL DE VENTAS
	*/
  async getTotalSolds(data: TotalSoldsDto): Promise<number> {
    const { comId2, camTp2 } = data;
    const queryComission = this.entity
      .createQueryBuilder("c")
      .select([
        `SUM( (CASE when SEPROCESA = 'S' then VENTA else 0 end)/ ${camTp2})`,
      ])
      .where(`ID_COMCALCULADA = ${comId2}`);
    return (await queryComission.getRawOne()).sum ?? 0;
  }

  /*
    CALCULA LA COMISION
  */
  async calculateCommission(data: CalcCommissionDto) {
    const { comId, rountine, camTp } = data;
    const query = `${rountine}(${comId}, ${camTp})`;
    return await this.entity.query(query);
  }

  /*
    APLICA LA COMISION A LOS BIENES
	*/
  async applyGoodsComission(data: GoodsComissionDto) {
    const { comId3, camTp3, porc3 } = data;
    const ac = await this.entity
      .createQueryBuilder()
      .select([
        `NO_BIEN as "goodNumber"`,
        `${porc3} * (case when SEPROCESA = 'S' then VENTA else
				0 end ) / ${camTp3} as sale`,
      ])
      .where(`ID_COMCALCULADA = ${comId3}`)
      .getRawMany();
    let counter = 0;
    for (const el of ac) {
      const { affected } = await this.updateComissionData({
        comId: comId3,
        comission: el.sale,
        goodNumber: el.goodNumber,
      });
      counter = counter + affected;
    }
    return `${counter} registros actualizados`;
  }

  /*
  	CALCULA LA COMISION APLICANDO A LA VENTA EL PORCENTAJE DE COMISION
	*/
  async calculateComissionTotal(data: ComissionTotalDto) {}

  /*
    ACTUALIZA LOS DATOS DE LA COMISION
	*/
  async updateComissionData(data: UpdtComissionDto) {
    const { comId, comission, goodNumber } = data;

    return await this.entity
      .createQueryBuilder()
      .update(ComerComissionxbGoodEntity)
      .set({ comisionAmount: comission })
      .where(`ID_COMCALCULADA = ${comId}`)
      .andWhere(` NO_BIEN = ${goodNumber}`)
      .execute();
  }

  /*
    ELIMINA EL RESULTA DEL CALCULO DE LA CONVERSION A NUMERARIO
  */
  async deleteComission(comId: Number) {
    return await this.entity
      .createQueryBuilder()
      .delete()
      .from(ComerComissionxbGoodEntity)
      .where(`ID_COMCALCULADA = ${comId}`)
      .execute();
  }

  /*
    OBTIENE LOS BIENES QUE PARTICIPAN EN EL CALCULO DE LA COMISION
  */
  async getGoodsInCalculateComission(comId: Number) {}

  /*
    OBTIENE LOS BIENES PAGADOS EN UN RANGO DE FECHAS
  */
  async getPaidGoodsInDates(data: PaidGoodsInDatesDto) {}

  /**
   COPIA LOS LOTES DEL EVENTO
  */
  async copyEvenLot() {}

  /*
    MARCA LOS LOTES MAYORES A LA FECHA
  */
  async markLotsDateGreater(date: Date) {
    this.lbfPayment.map((el) => {
      el.isValid =
        new Date(el.date) > new Date(date) && el.lotId > 1 ? "N" : "S";

      if (el.isValid == "N") {
        this.lbfLots.map((lot) => {
          if (lot.id == el.lotId) lot.isValid = "D";
        });
      }

      if (el.isValid == "D") {
        this.lbfLots.map((lot) => {
          if (lot.id == el.lotId) lot.id = -1;
        });
      }
    });
  }

  /*
    MARCA LOS LOTES MENORES A LA FECHA
  */
  async markLotsDateMinor(date: Date) {
    this.lbfPayment.map((el) => {
      if (new Date(el.date) < new Date(date)) {
        el.isValid = "N";
        // update
      }
    });
  }

  /*
    ELIMIAR LOS LOTES QUE TODOS SUS PAGOS SON MENORES A LA FECHA
  */
  async deleteLotsPaymentsDateMinor(startDate: Date) {
    const lbfPayment = await this.entityPayment
      .createQueryBuilder()
      .select([
        `ID_PAGO as "id"`,
        `FECHA as "date"`,
        `ID_LOTE as "lotId"`,
        `valido_sistema as "valid"`,
      ])
      .getRawMany();
    let l = 0;
    this.lbfLots.map((lbfLot, i) => {
      return lbfPayment.map((lbfPayment, d) => {
        if (lbfLot.id == lbfPayment.lotId) {
          this.lbfAux[l].lotId = lbfPayment[d].lotId;
          this.lbfAux[l].isValid = lbfPayment.isValid == "N" ? "D" : "S";
          l++;
        }
      });
    });

    this.lbfAux.map((el) => {
      if (el.isValid == "S") {
        this.lbfLots.map((lot) => {
          if (el.lotId == lot.id) {
            lot.isValid = "S";
          }
        });
      }
    });

    this.lbfLots = this.lbfLots.filter((el) => el.isValid != "N");

    this.lbfLots.map((lbfLot, i) => {
      return lbfPayment.map((lbfPayment, d) => {
        if (lbfLot.id == lbfPayment.lotId) {
          lbfPayment.isValid = "P";
        }
      });
    });

    lbfPayment.map((lbfPayment, d) => {
      if (lbfPayment.isValid != "P") {
        lbfPayment.lotId = -1;
      }
    });

    this.lbfPayment = [];
    return "Eliminado correctamente";
  }

  /*
    OBTIENE LOS BIENES PAGADOS DE UN EVENTO
  */
  async getGoodsPaidFromEvent(data: GoodsPaidFromEventDto) {
    const { eventId, comId } = data;
    const ca = await this.entity.query(`
      SELECT
        BXL.NO_BIEN as "lbeGoodNumber",
        CAT.CVMAN as "lbeCvMan",
        LOT.LOTE_PUBLICO as "lbeLot",
        coalesce(BXL.PRECIO_SIN_IVA,
        0) + coalesce(BXL.MONTO_NOAPP_IVA,
        0) as "lbeSale"
      FROM
        sera.COMER_BIENESXLOTE     BXL,
        sera.COMER_LOTES           LOT,
        sera.CAT_TRANSFERENTE      CAT
      WHERE
        LOT.ID_EVENTO = ${eventId}
        AND BXL.ID_LOTE = LOT.ID_LOTE
        AND LOT.ID_ESTATUSVTA = 'PAG'
        AND BXL.NO_TRANSFERENTE = CAT.NO_TRANSFERENTE
        AND NOT EXISTS (
          SELECT
            1
          FROM
            sera.COMER_COMISIONESXBIEN CCB
          WHERE
            CCB.NO_BIEN = BXL.NO_BIEN
            AND CCB.ID_COMCALCULADA = ${comId}
        );
    `);
    let counter = 0;
    for (const el of ca) {
      const body = {
        comId1: comId,
        event1: eventId,
        good1: el.lbeGoodNumber,
        com1: 0,
        lot1: el.lbeLot,
        cvMan1: el.lbeCvMan,
        sold1: el.lbeSale,
      };
      const inserted = await this.insertGoods(body);
      if (inserted) counter++;
    }
    return `${counter} registros creados`;
  }

  /*
    SE ENCARGA DE INSERTAR LOS DATOS DE LOS BIENES
  */
  async insertGoods(data: InsrtGoodDto) {
    const { comId1, event1, good1, com1, lot1, cvMan1, sold1 } = data;
    const body = {
      comCalculatedId: comId1,
      eventId: event1,
      goodNumber: good1,
      comisionAmount: com1,
      lot: lot1,
      cvMan: cvMan1,
      sale: sold1,
      comments: null,
      itsProcessed: "S",
    };
    try {
      return await this.entity.save(body);
    } catch (err) {
      return err.detail;
    }
  }

  /*
    OBTIENE PARAMETROS GLOBALES
  */
  async getGlobalParams(data: GlobalParamsDto): Promise<string> {
    return "OK";
  }
}
/* 11 Sin terminar y 19 totales */
