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
exports.SatsaeClassificationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const satsae_classification_dto_1 = require("./dto/satsae-classification.dto");
const satsae_classification_service_1 = require("./satsae-classification.service");
let SatsaeClassificationController = class SatsaeClassificationController {
    constructor(satSaeClassificationService) {
        this.satSaeClassificationService = satSaeClassificationService;
    }
    async getAllSatSaeClassifications(pagination) {
        return await this.satSaeClassificationService.getAllSatSaeClassification(pagination);
    }
    async getSatSaeClassificationById(id) {
        return await this.satSaeClassificationService.getSatSaeClassificationById(id);
    }
    async createSatSaeClassification(satSaeClassificationDTO) {
        const task = await this.satSaeClassificationService.createSatSaeClassification(satSaeClassificationDTO);
        return task ? task :
            { statusCode: 503, message: "This satSaeClassification was not created", error: "Create Error" };
    }
    async updateSatSaeClassification(satSaeClassificationDTO) {
        const task = await this.satSaeClassificationService.updateSatSaeClassification(satSaeClassificationDTO.id, satSaeClassificationDTO);
        return task ? task : { statusCode: '404', message: 'Sat Sae classification not found', error: "Not found" };
    }
    async deleteSatSaeClassification(id_satSaeClassification) {
        const { affected } = await this.satSaeClassificationService.deleteSatSaeClassification(id_satSaeClassification);
        return affected == 0
            ? { statusCode: '404', message: 'SatSaeClassification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSatSaeClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "getAllSatSaeClassifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSatSaeClassificationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "getSatSaeClassificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSatSaeClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [satsae_classification_dto_1.SatSaeClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "createSatSaeClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSatSaeClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [satsae_classification_dto_1.SatSaeClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "updateSatSaeClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSatSaeClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "deleteSatSaeClassification", null);
SatsaeClassificationController = __decorate([
    (0, common_1.Controller)('satsae-classification'),
    __metadata("design:paramtypes", [satsae_classification_service_1.SatsaeClassificationService])
], SatsaeClassificationController);
exports.SatsaeClassificationController = SatsaeClassificationController;
//# sourceMappingURL=satsae-classification.controller.js.map