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
exports.SatClassificationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const sat_classification_dto_1 = require("./dto/sat-classification.dto");
const sat_classification_service_1 = require("./sat-classification.service");
let SatClassificationController = class SatClassificationController {
    constructor(satClassificationService, logger) {
        this.satClassificationService = satClassificationService;
        this.logger = logger;
    }
    async getAllSatClassifications(pagination) {
        return await this.satClassificationService.getAllSatClassification(pagination);
    }
    async getSatClassificationById(id) {
        return await this.satClassificationService.getSatClassificationById(id);
    }
    async createSatClassification(satClassificationDTO) {
        const task = await this.satClassificationService.createSatClassification(satClassificationDTO);
        return task ? task :
            { statusCode: 503, message: "This general classfication was not created", error: "Create Error" };
    }
    async updateSatClassification(satClassificationDTO) {
        const task = await this.satClassificationService.updateSatClassification(satClassificationDTO.id, satClassificationDTO);
        return task ? task : { statusCode: '404', message: 'Classification not found', error: "Not found" };
    }
    async deleteSatClassification(id) {
        const { affected } = await this.satClassificationService.deleteSatClassification(id);
        return affected == 0
            ? { statusCode: '404', message: 'Classification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSatClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "getAllSatClassifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSatClassificationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "getSatClassificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSatClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "createSatClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSatClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "updateSatClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSatClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "deleteSatClassification", null);
SatClassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('sat_classification'),
    (0, swagger_1.ApiTags)('sat_classification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [sat_classification_service_1.SatClassificationService,
        common_1.Logger])
], SatClassificationController);
exports.SatClassificationController = SatClassificationController;
//# sourceMappingURL=sat-classification.controller.js.map