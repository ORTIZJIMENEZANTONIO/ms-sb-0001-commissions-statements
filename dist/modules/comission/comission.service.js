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
let ComissionService = class ComissionService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async centralCoordinate(data) {
        const { comId, tpCam } = data;
        const pctAux = await this.getPctComissionToSpecial({
            comId2: comId,
            camTp2: tpCam,
        });
        return await this.applyGoodsComission({
            comId3: comId,
            camTp3: tpCam,
            porc3: pctAux,
        });
    }
    async calculateCommissionSpecialRange(data) { }
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
    async calculateCommissionRange(data) { }
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
    async calculateCommission(data) { }
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
    async getPaidGoodsInDates(data) { }
    async copyEvenLot() { }
    async markLotsDateGreater(date) { }
    async markLotsDateMinor(date) { }
    async deleteLotsPaymentsDateMinor(startDate) { }
    async getGoodsPaidFromEvent(data) { }
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
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("comer_comission_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComissionService);
exports.ComissionService = ComissionService;
//# sourceMappingURL=comission.service.js.map