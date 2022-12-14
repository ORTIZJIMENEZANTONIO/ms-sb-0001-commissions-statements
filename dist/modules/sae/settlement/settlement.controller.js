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
exports.SettlementController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const settlement_service_1 = require("./settlement.service");
const settlement_dto_1 = require("./dto/settlement.dto");
let SettlementController = class SettlementController {
    constructor(settlementService, logger) {
        this.settlementService = settlementService;
        this.logger = logger;
    }
    async createSettlement(settlementDto) {
        const settlementCreated = await this.settlementService.createSettlement(settlementDto);
        return settlementCreated
            ? settlementCreated
            : { statusCode: 503, message: "This Settlement was not created", error: "Create Error" };
    }
    async getAllSettlements(pagination) {
        return await this.settlementService.getAllSettlements(pagination);
    }
    async getSettlementByCode(code) {
        const settlementFound = await this.settlementService.getSettlementByCode(code);
        return settlementFound
            ? settlementFound
            : { statusCode: '404', message: 'Settlement not found', error: "Not found" };
    }
    async updateSettlement(data) {
        const settlementUpdated = await this.settlementService.updateSettlement(data.codeToUpdate, data);
        return settlementUpdated
            ? settlementUpdated
            : { statusCode: '404', message: 'Settlement not found', error: "Not found" };
    }
    async deleteSettlement(code) {
        const { affected } = await this.settlementService.deleteSettlement(code);
        return affected == 0
            ? { statusCode: '404', message: 'Settlement not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSettlement' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settlement_dto_1.SettlementDto]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "createSettlement", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSettlements' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "getAllSettlements", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSettlementByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "getSettlementByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSettlement' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "updateSettlement", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSettlement' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "deleteSettlement", null);
SettlementController = __decorate([
    (0, common_1.Controller)('settlement'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [settlement_service_1.SettlementService,
        winston_1.Logger])
], SettlementController);
exports.SettlementController = SettlementController;
//# sourceMappingURL=settlement.controller.js.map