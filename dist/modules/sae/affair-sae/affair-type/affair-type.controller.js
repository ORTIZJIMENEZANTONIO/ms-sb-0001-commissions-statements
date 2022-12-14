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
exports.AffairTypeController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const affair_type_service_1 = require("./affair-type.service");
const affair_type_dto_1 = require("./dto/affair-type.dto");
let AffairTypeController = class AffairTypeController {
    constructor(affairTypeService, logger) {
        this.affairTypeService = affairTypeService;
        this.logger = logger;
    }
    async createAffairType(affairTypeDto) {
        const affairTypeService = await this.affairTypeService.createAffairType(affairTypeDto);
        return affairTypeService
            ? affairTypeService
            : { statusCode: 503, message: "This Affair Type was not created", error: "Create Error" };
    }
    async getAllAffairTypes(pagination) {
        return await this.affairTypeService.getAllAffairTypes(pagination);
    }
    async getAffairTypeById(id) {
        const affairTypeFound = await this.affairTypeService.getAffairTypeById(id);
        return affairTypeFound
            ? affairTypeFound
            : { statusCode: '404', message: 'AffairType not found', error: "Not found" };
    }
    async updateAffairType(data) {
        const AffairTypeUpdated = await this.affairTypeService.updateAffairType(data.idToUpdate, data);
        return AffairTypeUpdated
            ? AffairTypeUpdated
            : { statusCode: '404', message: 'Affair Type not found', error: "Not found" };
    }
    async deleteAffairType(id) {
        const { affected } = await this.affairTypeService.deleteAffairType(id);
        return affected == 0
            ? { statusCode: '404', message: 'Affair Type not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createAffairType' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [affair_type_dto_1.AffairTypeDto]),
    __metadata("design:returntype", Promise)
], AffairTypeController.prototype, "createAffairType", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllAffairTypes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AffairTypeController.prototype, "getAllAffairTypes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAffairTypeById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairTypeController.prototype, "getAffairTypeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateAffairType' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AffairTypeController.prototype, "updateAffairType", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAffairType' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairTypeController.prototype, "deleteAffairType", null);
AffairTypeController = __decorate([
    (0, common_1.Controller)('affair-type'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [affair_type_service_1.AffairTypeService,
        winston_1.Logger])
], AffairTypeController);
exports.AffairTypeController = AffairTypeController;
//# sourceMappingURL=affair-type.controller.js.map