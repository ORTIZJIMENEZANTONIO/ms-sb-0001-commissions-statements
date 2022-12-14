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
exports.IssuingInstitutionController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const issuing_institution_dto_1 = require("./dto/issuing-institution.dto");
const issuing_institution_service_1 = require("./issuing-institution.service");
let IssuingInstitutionController = class IssuingInstitutionController {
    constructor(issuingInstitutionService) {
        this.issuingInstitutionService = issuingInstitutionService;
    }
    async getAllIssuingInstitutions(pagination) {
        return await this.issuingInstitutionService.getAllIssuingInstitution(pagination);
    }
    async getIssuingInstitutionById(id) {
        return await this.issuingInstitutionService.getIssuingInstitutionById(id);
    }
    async createIssuingInstitution(issuingInstitutionDTO) {
        const task = await this.issuingInstitutionService.createIssuingInstitution(issuingInstitutionDTO);
        return task ? task :
            { statusCode: 503, message: "This issuingInstitution was not created", error: "Create Error" };
    }
    async updateIssuingInstitution(issuingInstitutionDTO) {
        const task = await this.issuingInstitutionService.updateIssuingInstitution(issuingInstitutionDTO.id, issuingInstitutionDTO);
        return task ? task : { statusCode: '404', message: 'IssuingInstitution not found', error: "Not found" };
    }
    async deleteIssuingInstitution(id_issuingInstitution) {
        const { affected } = await this.issuingInstitutionService.deleteIssuingInstitution(id_issuingInstitution);
        return affected == 0
            ? { statusCode: '404', message: 'IssuingInstitution not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllIssuingInstitution' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "getAllIssuingInstitutions", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getIssuingInstitutionById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "getIssuingInstitutionById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createIssuingInstitution' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issuing_institution_dto_1.IssuingInstitutionDTO]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "createIssuingInstitution", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateIssuingInstitution' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issuing_institution_dto_1.IssuingInstitutionDTO]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "updateIssuingInstitution", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteIssuingInstitution' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "deleteIssuingInstitution", null);
IssuingInstitutionController = __decorate([
    (0, common_1.Controller)('issuig-institution'),
    __metadata("design:paramtypes", [issuing_institution_service_1.IssuingInstitutionService])
], IssuingInstitutionController);
exports.IssuingInstitutionController = IssuingInstitutionController;
//# sourceMappingURL=issuing-institution.controller.js.map