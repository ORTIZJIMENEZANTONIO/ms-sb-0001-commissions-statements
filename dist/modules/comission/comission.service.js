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
    async centralCoordinate(data) { }
    async calculateCommissionSpecialRange(data) { }
    async getPctComissionToSpecial(data) { }
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
    async applyGoodsComission(data) { }
    async calculateComissionTotal(data) { }
    async updateComissionData(data) { }
    async deleteComission(comId) { }
    async getGoodsInCalculateComission(comId) { }
    async getPaidGoodsInDates(data) { }
    async copyEvenLot() { }
    async markLotsDateGreater(date) { }
    async markLotsDateMinor(date) { }
    async deleteLotsPaymentsDateMinor(startDate) { }
    async getGoodsPaidFromEvent(data) { }
    async insertGoods(data) { }
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