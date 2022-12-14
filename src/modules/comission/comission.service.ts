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

@Injectable()
export class ComissionService {
  constructor(
    // @InjectRepository(ComerPenaltyEntity)
    // private entity: Repository<ComerPenaltyEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_comission_served") public counter: Counter<string>
  ) {}
  /*******************************************************************************************************************
		COORDINA LOS LLAMADOS A PROCESOS
	*******************************************************************************************************************/
  async centralCoordinate(data: CentralCoordinateDto) {}


  /*******************************************************************************************************************
		CALCULA LA COMISION EN UN RANGO ESPECIFICO ESPECIAL CASO EBAY
	*******************************************************************************************************************/
  async calculateCommissionSpecialRange(data: ComissionSpecialRangeDto) {}

  /**********************************
   	OBTIENE EL PCT DE COMISION PARA RANGO ESPECIAL
  *******************************************************************************************************************/
  async getPctComissionToSpecial(data: PctSpecialDto) {}

  /**********************************
    CALCULA LA COMISION EN UN RANGO ESPECIFICO
	*******************************************************************************************************************/
  async calculateCommissionRange(data: ComissionRangeDto) {}

  /**********************************
    OBTIENE EL TOTAL DE VENTAS
	***************************************/
  async getTotalSolds(data: TotalSoldsDto) {}

  /**********************************
    CALCULA LA COMISION
  *******************************************************************************************************************/
  async calculateCommission(data: CalcCommissionDto) {}

  /**********************************
    APLICA LA COMISION A LOS BIENES
	***************************************/
  async applyGoodsComission(data: GoodsComissionDto) {}

  /********************************************************
  	CALCULA LA COMISION APLICANDO A LA VENTA EL PORCENTAJE DE COMISION
	**********************************************************************************/
  async calculateComissionTotal(data: ComissionTotalDto) {}

  /*
    ACTUALIZA LOS DATOS DE LA COMISION
	***************************************/
  async updateComissionData(data: UpdtComissionDto) {}

  /*
    ELIMINA EL RESULTA DEL CALCULO DE LA CONVERSION A NUMERARIO
  */
  async deleteComission(comId: Number) {}

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
  async markLotsDateGreater(date: Date) {}

  /*
    MARCA LOS LOTES MENORES A LA FECHA
  */
  async markLotsDateMinor(date: Date) {}

  /*
    ELIMIAR LOS LOTES QUE TODOS SUS PAGOS SON MENORES A LA FECHA
  */
  async deleteLotsPaymentsDateMinor(startDate: Date) {}

  /*
    OBTIENE LOS BIENES PAGADOS DE UN EVENTO
  */
  async getGoodsPaidFromEvent(data: GoodsPaidFromEventDto) {}

  /*
    SE ENCARGA DE INSERTAR LOS DATOS DE LOS BIENES
  */
  async insertGoods(data: InsrtGoodDto) {}

  /*
    OBTIENE PARAMETROS GLOBALES
  */
  async getGlobalParams(data: GlobalParamsDto): Promise<string> {
    return "";
  }
}
