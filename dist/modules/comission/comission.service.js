"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComissionService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_comission_x_good_entity_1 = require("./entities/comer-comission-x-good.entity");
const comer_payment_ref_entity_1 = require("./entities/comer-payment-ref.entity");
const comer_lot_entity_1 = require("./entities/comer-lot.entity");
const comer_event_entity_1 = require("./entities/comer-event.entity");
let ComissionService = class ComissionService {
    constructor(entity, entityEvent, entityLot, entityPayment, logger, counter) {
        this.entity = entity;
        this.entityEvent = entityEvent;
        this.entityLot = entityLot;
        this.entityPayment = entityPayment;
        this.logger = logger;
        this.counter = counter;
        this.lbfLots = [];
        this.lbfPayment = [];
        this.lbfAux = [];
    }
    async centralCoordinate(data) { }
    async calculateCommissionSpecialRange(data) {
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
    async getPctComissionToSpecial(data) {
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
    async calculateCommissionRange(data) {
        var _a;
        const { comId1, camTp1 } = data;
        const crAmount = await this.getTotalSolds({
            comId2: comId1,
            camTp2: camTp1,
        });
        const crPctCom = (_a = (await this.entity.query(`
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
    `))[0].crPctCom) !== null && _a !== void 0 ? _a : 0;
        return await this.applyGoodsComission({
            comId3: comId1,
            camTp3: camTp1,
            porc3: crPctCom,
        });
    }
    async getTotalSolds(data) {
        var _a;
        const { comId2, camTp2 } = data;
        const queryComission = this.entity
            .createQueryBuilder("c")
            .select([
            `SUM( (CASE when SEPROCESA = 'S' then VENTA else 0 end)/ ${camTp2})`,
        ])
            .where(`ID_COMCALCULADA = ${comId2}`);
        return (_a = (await queryComission.getRawOne()).sum) !== null && _a !== void 0 ? _a : 0;
    }
    async calculateCommission(data) {
        const { comId, rountine, camTp } = data;
        const query = `${rountine}(${comId}, ${camTp})`;
        return await this.entity.query(query);
    }
    async applyGoodsComission(data) {
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
    async calculateComissionTotal(data) { }
    async updateComissionData(data) {
        const { comId, comission, goodNumber } = data;
        return await this.entity
            .createQueryBuilder()
            .update(comer_comission_x_good_entity_1.ComerComissionxbGoodEntity)
            .set({ comisionAmount: comission })
            .where(`ID_COMCALCULADA = ${comId}`)
            .andWhere(` NO_BIEN = ${goodNumber}`)
            .execute();
    }
    async deleteComission(comId) {
        return await this.entity
            .createQueryBuilder()
            .delete()
            .from(comer_comission_x_good_entity_1.ComerComissionxbGoodEntity)
            .where(`ID_COMCALCULADA = ${comId}`)
            .execute();
    }
    async getGoodsInCalculateComission(comId) { }
    async getPaidGoodsInDates(data) {
        const { startDate, endDate, comId1 } = data;
        let lbeEventId = 0;
        let lbfPaymentId = 0;
        let lbflotId = 0;
        let lbfDate = new Date();
        let i = 0;
        let k = 0;
        let lbfGood = 0;
        let lbfCvMan = 0;
        let lbfLotPub = 0;
        let lbfAmount = 0;
        let lbfEvent = 0;
        let cont = 0;
        const lbe = await this.entityEvent
            .createQueryBuilder("eve")
            .select([`eve.id as "id"`])
            .where(`eve.DIRECCION = 'M'`)
            .andWhere(`EXISTS (SELECT
          1
        FROM
          sera.COMER_PAGOREF            PRF,
          sera.COMER_PAGOSREFGENS       GEN
        WHERE
          PRF.ID_PAGO = GEN.ID_PAGO
          AND GEN.ID_EVENTO = eve.ID_EVENTO
          AND PRF.FECHA >= ${startDate}
          AND PRF.FECHA <= ${endDate})
      `)
            .andWhere(`EXISTS (
        SELECT
          1
        FROM
          sera.COMER_TPEVENTOSXTERCOMER TXT,
          sera.COMER_COMCALCULADA       CCL
        WHERE
          CCL.ID_COMCALCULADA = ${comId1}
          AND TXT.ID_TERCEROCOMER = CCL.ID_TERCEROCOMER
          AND TXT.ID_TPEVENTO = eve.ID_TPEVENTO  
      `)
            .getRawMany();
    }
    async copyEvenLot() {
        let lotPrev = 0;
        let d = 0;
        for (const payment of this.lbfPayment) {
            lotPrev = payment.id;
            this.lbfLots[d].isValid = "N";
            this.lbfLots[d].id = payment.lotId;
            d++;
        }
    }
    async markLotsDateGreater(date) {
        this.lbfPayment.map((el) => {
            el.isValid =
                new Date(el.date) > new Date(date) && el.lotId > 1 ? "N" : "S";
            if (el.isValid == "N") {
                this.lbfLots.map((lot) => {
                    if (lot.id == el.lotId)
                        lot.isValid = "D";
                });
            }
            if (el.isValid == "D") {
                this.lbfLots.map((lot) => {
                    if (lot.id == el.lotId)
                        lot.id = -1;
                });
            }
        });
    }
    async markLotsDateMinor(date) {
        this.lbfPayment.map((el) => {
            if (new Date(el.date) < new Date(date)) {
                el.isValid = "N";
            }
        });
    }
    async deleteLotsPaymentsDateMinor(startDate) {
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
    async getGoodsPaidFromEvent(data) {
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
            if (inserted)
                counter++;
        }
        return `${counter} registros creados`;
    }
    async insertGoods(data) {
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
        }
        catch (err) {
            return err.detail;
        }
    }
    async getGlobalParams(data) {
        return "OK";
    }
};
ComissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_comission_x_good_entity_1.ComerComissionxbGoodEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_event_entity_1.ComerEventEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_lot_entity_1.ComerLotEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(comer_payment_ref_entity_1.ComerPaymentRefEntity)),
    __param(4, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(5, (0, nestjs_prometheus_1.InjectMetric)("comer_comission_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComissionService);
exports.ComissionService = ComissionService;
//# sourceMappingURL=comission.service.js.map