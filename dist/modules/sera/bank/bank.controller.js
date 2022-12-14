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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const bank_service_1 = require("./bank.service");
const bank_dto_1 = require("./dto/bank.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let BankController = class BankController {
    constructor(bankService, logger) {
        this.bankService = bankService;
        this.logger = logger;
    }
    async createbank(bankDto) {
        const bankCreated = await this.bankService.createBank(bankDto);
        return bankCreated
            ? bankCreated
            : { statusCode: 503, message: "This bank was not created", error: "Create Error" };
    }
    async getAllBankes({ inicio, pageSize }) {
        return await this.bankService.getAllBanks({ inicio, pageSize });
    }
    async getBankByCode(code) {
        const bankFound = await this.bankService.getBankByCode(code);
        return bankFound
            ? bankFound
            : { statusCode: '404', message: 'bank not found', error: "Not found" };
    }
    async updatebank(data) {
        const bankUpdated = await this.bankService.updateBank(data.codeToUpdate, data);
        return bankUpdated
            ? bankUpdated
            : { statusCode: '404', message: 'bank not found', error: "Not found" };
    }
    async deletebank(code) {
        const { affected } = await this.bankService.deleteBank(code);
        return affected == 0
            ? { statusCode: '404', message: 'bank not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createBank' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_dto_1.BankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "createbank", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllBanks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "getAllBankes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getBankByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "getBankByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateBank' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "updatebank", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteBank' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "deletebank", null);
BankController = __decorate([
    (0, common_1.Controller)('bank'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [bank_service_1.BankService,
        winston_1.Logger])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map