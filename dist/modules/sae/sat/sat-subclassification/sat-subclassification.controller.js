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
exports.SatSubclassificationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const sat_classification_dto_1 = require("./dto/sat-classification.dto");
const sat_subclassification_service_1 = require("./sat-subclassification.service");
let SatSubclassificationController = class SatSubclassificationController {
    constructor(satClassificationService, logger) {
        this.satClassificationService = satClassificationService;
        this.logger = logger;
    }
    async getAllSatSubClassifications(pagination) {
        return await this.satClassificationService.getAllSatSubClassification(pagination);
    }
    async getSatSubClassificationById(id) {
        return await this.satClassificationService.getSatSubClassificationById(id);
    }
    async createSatSubClassification(satSubClassificationDTO) {
        const task = await this.satClassificationService.createSatSubClassification(satSubClassificationDTO);
        return task ? task :
            { statusCode: 503, message: "This  subclassfication was not created", error: "Create Error" };
    }
    async updateSatSubClassification(satSubClassificationDTO) {
        const task = await this.satClassificationService.updateSatSubClassification(satSubClassificationDTO.id, satSubClassificationDTO);
        return task ? task : { statusCode: '404', message: 'Subclassification not found', error: "Not found" };
    }
    async deleteSatSubClassification(id) {
        const { affected } = await this.satClassificationService.deleteSatSubClassification(id);
        return affected == 0
            ? { statusCode: '404', message: 'SubClassification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSatSubClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "getAllSatSubClassifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSatSubClassificationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "getSatSubClassificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSatSubClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatSubClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "createSatSubClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSatSubClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatSubClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "updateSatSubClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSatSubClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "deleteSatSubClassification", null);
SatSubclassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('sat_subclassification'),
    (0, swagger_1.ApiTags)('sat_subclassification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [sat_subclassification_service_1.SatSubclassificationService,
        common_1.Logger])
], SatSubclassificationController);
exports.SatSubclassificationController = SatSubclassificationController;
//# sourceMappingURL=sat-subclassification.controller.js.map