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
exports.LegalAffairController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const legal_affair_service_1 = require("./legal-affair.service");
const legal_affair_dto_1 = require("./dto/legal-affair.dto");
let LegalAffairController = class LegalAffairController {
    constructor(legalAffairService, logger) {
        this.legalAffairService = legalAffairService;
        this.logger = logger;
    }
    async createLegalAffair(legalAffairDto) {
        const legalAffairCreated = await this.legalAffairService.createLegalAffair(legalAffairDto);
        return legalAffairCreated
            ? legalAffairCreated
            : { statusCode: 503, message: "This Legal Affair  was not created", error: "Create Error" };
    }
    async getAllLegalAffairs(pagination) {
        return await this.legalAffairService.getAllLegalAffairs(pagination);
    }
    async getLegalAffairById(id) {
        const legalAffairFound = await this.legalAffairService.getLegalAffairById(id);
        return legalAffairFound
            ? legalAffairFound
            : { statusCode: '404', message: 'Legal Affair not found', error: "Not found" };
    }
    async updateLegalAffair(data) {
        const legalAffairUpdated = await this.legalAffairService.updateLegalAffair(data.idToUpdate, data);
        return legalAffairUpdated
            ? legalAffairUpdated
            : { statusCode: '404', message: 'Legal Affair  not found', error: "Not found" };
    }
    async deleteLegalAffair(id) {
        const { affected } = await this.legalAffairService.deleteLegalAffair(id);
        return affected == 0
            ? { statusCode: '404', message: 'Legal Affair  not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createLegalAffair' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_affair_dto_1.LegalAffairDto]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "createLegalAffair", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllLegalAffairs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "getAllLegalAffairs", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getLegalAffairById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "getLegalAffairById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateLegalAffair' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "updateLegalAffair", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteLegalAffair' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LegalAffairController.prototype, "deleteLegalAffair", null);
LegalAffairController = __decorate([
    (0, common_1.Controller)('legal-affair'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [legal_affair_service_1.LegalAffairService,
        winston_1.Logger])
], LegalAffairController);
exports.LegalAffairController = LegalAffairController;
//# sourceMappingURL=legal-affair.controller.js.map