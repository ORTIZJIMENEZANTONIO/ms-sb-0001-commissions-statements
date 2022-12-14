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
exports.ClarificationController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const clarification_service_1 = require("./clarification.service");
const clarification_dto_1 = require("./dto/clarification.dto");
let ClarificationController = class ClarificationController {
    constructor(clarificationService, logger) {
        this.clarificationService = clarificationService;
        this.logger = logger;
    }
    async createClarification(clarificationDto) {
        const clarificationCreated = await this.clarificationService.createClarification(clarificationDto);
        return clarificationCreated
            ? clarificationCreated
            : { statusCode: 503, message: "This Clarification was not created", error: "Create Error" };
    }
    async getAllClarifications(pagination) {
        return await this.clarificationService.getAllClarifications(pagination);
    }
    async getClarificationById(id) {
        const clarificationFound = await this.clarificationService.getClarificationById(id);
        return clarificationFound
            ? clarificationFound
            : { statusCode: '404', message: 'Clarification not found', error: "Not found" };
    }
    async updateClarification(data) {
        const clarificationUpdated = await this.clarificationService.updateClarification(data.idToUpdate, data);
        return clarificationUpdated
            ? clarificationUpdated
            : { statusCode: '404', message: 'Response not found', error: "Not found" };
    }
    async deleteClarification(id) {
        const { affected } = await this.clarificationService.deleteClarification(id);
        return affected == 0
            ? { statusCode: '404', message: 'Clarification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createClarification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clarification_dto_1.ClarificationDto]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "createClarification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllClarifications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "getAllClarifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getClarificationById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "getClarificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateClarification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "updateClarification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteClarification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "deleteClarification", null);
ClarificationController = __decorate([
    (0, common_1.Controller)('clarification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [clarification_service_1.ClarificationService,
        winston_1.Logger])
], ClarificationController);
exports.ClarificationController = ClarificationController;
//# sourceMappingURL=clarification.controller.js.map