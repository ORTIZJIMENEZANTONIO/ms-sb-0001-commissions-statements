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
exports.ComissionController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const comission_service_1 = require("./comission.service");
const get_global_params_dto_1 = require("./dto/get-global-params.dto");
const insrt_goods_dto_1 = require("./dto/insrt-goods.dto");
const get_goods_paid_from_event_dto_1 = require("./dto/get-goods-paid-from-event.dto");
const get_paid_goods_In_dates_dto_1 = require("./dto/get-paid-goods-In-dates.dto");
const updt_comission_dto_1 = require("./dto/updt-comission.dto");
const calc_comission_total_dto_1 = require("./dto/calc-comission-total.dto");
const goods_comission_dto_1 = require("./dto/goods-comission.dto");
const calc_comission_dto_1 = require("./dto/calc-comission.dto");
const get_total_solds_dto_1 = require("./dto/get-total-solds.dto");
const calc_comission_range_dto_1 = require("./dto/calc-comission-range.dto");
const get_pct_dto_1 = require("./dto/get-pct.dto");
const comission_special_range_dto_1 = require("./dto/comission-special-range.dto");
const central_coordinate_dto_1 = require("./dto/central-coordinate.dto");
let ComissionController = class ComissionController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    async centralCoordinate(data) { }
    async calculateCommissionSpecialRange(data) { }
    async getPctComissionToSpecial(data) { }
    async calculateCommissionRange(data) { }
    async getTotalSolds(data) { }
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
        return "";
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'centralCoordinate' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [central_coordinate_dto_1.CentralCoordinateDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "centralCoordinate", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'calculateCommissionSpecialRange' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comission_special_range_dto_1.ComissionSpecialRangeDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateCommissionSpecialRange", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getPctComissionToSpecial' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_pct_dto_1.PctSpecialDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getPctComissionToSpecial", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'calculateCommissionRange' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calc_comission_range_dto_1.ComissionRangeDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateCommissionRange", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getTotalSolds' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_total_solds_dto_1.TotalSoldsDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getTotalSolds", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'calculateCommission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calc_comission_dto_1.CalcCommissionDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateCommission", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'applyGoodsComission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_comission_dto_1.GoodsComissionDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "applyGoodsComission", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'calculateComissionTotal' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calc_comission_total_dto_1.ComissionTotalDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateComissionTotal", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateComissionData' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updt_comission_dto_1.UpdtComissionDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "updateComissionData", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteComission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "deleteComission", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodsInCalculateComission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getGoodsInCalculateComission", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getPaidGoodsInDates' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_paid_goods_In_dates_dto_1.PaidGoodsInDatesDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getPaidGoodsInDates", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'copyEvenLot' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "copyEvenLot", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'markLotsDateGreater' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "markLotsDateGreater", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'markLotsDateMinor' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "markLotsDateMinor", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteLotsPaymentsDateMinor' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "deleteLotsPaymentsDateMinor", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodsPaidFromEvent' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_goods_paid_from_event_dto_1.GoodsPaidFromEventDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getGoodsPaidFromEvent", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'insertGoods' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insrt_goods_dto_1.InsrtGoodDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "insertGoods", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGlobalParams' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_global_params_dto_1.GlobalParamsDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getGlobalParams", null);
ComissionController = __decorate([
    (0, common_1.Controller)('comission'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comission_service_1.ComissionService,
        winston_1.Logger])
], ComissionController);
exports.ComissionController = ComissionController;
//# sourceMappingURL=comission.controller.js.map