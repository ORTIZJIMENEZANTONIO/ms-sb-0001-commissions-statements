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
exports.InstitutionClassificationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const institution_classification_dto_1 = require("./dto/institution-classification.dto");
const institution_classification_service_1 = require("./institution-classification.service");
let InstitutionClassificationController = class InstitutionClassificationController {
    constructor(institutionClassificationService, logger) {
        this.institutionClassificationService = institutionClassificationService;
        this.logger = logger;
    }
    async getAllInstitutionClassifications(pagination) {
        return await this.institutionClassificationService.getAllInstitutionClassification(pagination);
    }
    async getInstitutionClassificationById(id) {
        return await this.institutionClassificationService.getInstitutionClassificationById(id);
    }
    async createInstitutionClassification(institutionClassificationDTO) {
        const task = await this.institutionClassificationService.createInstitutionClassification(institutionClassificationDTO);
        return task ? task :
            { statusCode: 503, message: "This Institution Classification was not created", error: "Create Error" };
    }
    async updateInstitutionClassification(institutionClassificationDTO) {
        const task = await this.institutionClassificationService.updateInstitutionClassification(institutionClassificationDTO.id, institutionClassificationDTO);
        return task ? task : { statusCode: '404', message: 'Institution Classification not found', error: "Not found" };
    }
    async deleteInstitutionClassification(id_institutionClassification) {
        const { affected } = await this.institutionClassificationService.deleteInstitutionClassification(id_institutionClassification);
        return affected == 0
            ? { statusCode: '404', message: 'InstitutionClassification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllInstitutionClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "getAllInstitutionClassifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getInstitutionClassificationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "getInstitutionClassificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createInstitutionClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [institution_classification_dto_1.InstitutionClassificationDTO]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "createInstitutionClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateInstitutionClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [institution_classification_dto_1.InstitutionClassificationDTO]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "updateInstitutionClassification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteInstitutionClassification' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "deleteInstitutionClassification", null);
InstitutionClassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('intitution-classification'),
    (0, swagger_1.ApiTags)('institution-classification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [institution_classification_service_1.InstitutionClassificationService,
        common_1.Logger])
], InstitutionClassificationController);
exports.InstitutionClassificationController = InstitutionClassificationController;
//# sourceMappingURL=institution-classification.controller.js.map