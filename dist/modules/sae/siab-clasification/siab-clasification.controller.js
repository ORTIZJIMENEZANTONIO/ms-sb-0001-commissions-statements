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
exports.SiabClasificationController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const siab_clasification_dto_1 = require("./dto/siab-clasification.dto");
const siab_clasification_service_1 = require("./siab-clasification.service");
let SiabClasificationController = class SiabClasificationController {
    constructor(siabClasificationService, logger) {
        this.siabClasificationService = siabClasificationService;
        this.logger = logger;
    }
    async createSiabClasification(siabClasificationDto) {
        const siabClasificationCreated = await this.siabClasificationService.createSiabClasification(siabClasificationDto);
        return siabClasificationCreated
            ? siabClasificationCreated
            : { statusCode: 503, message: "This Siab Clasification was not created", error: "Create Error" };
    }
    async getAllSiabClasifications(pagination) {
        return await this.siabClasificationService.getAllSiabClasifications(pagination);
    }
    async getSiabClasificationById(id) {
        const siabClasificationFound = await this.siabClasificationService.getSiabClasificationById(id);
        return siabClasificationFound
            ? siabClasificationFound
            : { statusCode: '404', message: 'Siab Clasification not found', error: "Not found" };
    }
    async updateSiabClasification(data) {
        const siabClasificationUpdated = await this.siabClasificationService.updateSiabClasification(data.idToUpdate, data);
        return siabClasificationUpdated
            ? siabClasificationUpdated
            : { statusCode: '404', message: 'Siab Clasification not found', error: "Not found" };
    }
    async deleteSiabClasification(id) {
        const { affected } = await this.siabClasificationService.deleteSiabClasification(id);
        return affected == 0
            ? { statusCode: '404', message: 'Siab Clasification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSiabClasification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [siab_clasification_dto_1.SiabClasificationDto]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "createSiabClasification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSiabClasifications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "getAllSiabClasifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSiabClasificationById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "getSiabClasificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSiabClasification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "updateSiabClasification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSiabClasification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "deleteSiabClasification", null);
SiabClasificationController = __decorate([
    (0, common_1.Controller)('siab-clasification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [siab_clasification_service_1.SiabClasificationService,
        winston_1.Logger])
], SiabClasificationController);
exports.SiabClasificationController = SiabClasificationController;
//# sourceMappingURL=siab-clasification.controller.js.map