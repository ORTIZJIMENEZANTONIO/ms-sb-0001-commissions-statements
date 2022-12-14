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
exports.RegulatoryController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const regulatory_dto_1 = require("./dto/regulatory.dto");
const regulatory_service_1 = require("./regulatory.service");
let RegulatoryController = class RegulatoryController {
    constructor(regulatoryService, logger) {
        this.regulatoryService = regulatoryService;
        this.logger = logger;
    }
    async getAllRegulatorys(pagination) {
        return await this.regulatoryService.getAllRegulatory(pagination);
    }
    async getRegulatoryById(id) {
        return await this.regulatoryService.getRegulatoryById(id);
    }
    async createRegulatory(regulatoryDTO) {
        const task = await this.regulatoryService.createRegulatory(regulatoryDTO);
        return task ? task :
            { statusCode: 503, message: "This regulatory was not created", error: "Create Error" };
    }
    async updateRegulatory(regulatoryDTO) {
        const task = await this.regulatoryService.updateRegulatory(regulatoryDTO.id, regulatoryDTO);
        return task ? task : { statusCode: '404', message: 'Regulatory not found', error: "Not found" };
    }
    async deleteRegulatory(id) {
        const { affected } = await this.regulatoryService.deleteRegulatory(id);
        return affected == 0
            ? { statusCode: '404', message: 'Regulatory not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllRegulatory' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "getAllRegulatorys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getRegulatoryById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "getRegulatoryById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createRegulatory' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regulatory_dto_1.RegulatoryDTO]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "createRegulatory", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateRegulatory' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regulatory_dto_1.RegulatoryDTO]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "updateRegulatory", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteRegulatory' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "deleteRegulatory", null);
RegulatoryController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('regulatory'),
    (0, swagger_1.ApiTags)('regulatory'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [regulatory_service_1.RegulatoryService,
        common_1.Logger])
], RegulatoryController);
exports.RegulatoryController = RegulatoryController;
//# sourceMappingURL=regulatory.controller.js.map