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
exports.LegalSupportsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const legal_supports_dto_1 = require("./dto/legal-supports.dto");
const legal_supports_service_1 = require("./legal-supports.service");
let LegalSupportsController = class LegalSupportsController {
    constructor(legalSupportsService, logger) {
        this.legalSupportsService = legalSupportsService;
        this.logger = logger;
    }
    async getAllLegalSupportss(pagination) {
        return await this.legalSupportsService.getAllLegalSupports(pagination);
    }
    async getLegalSupportsById(id) {
        return await this.legalSupportsService.getLegalSupportsById(id);
    }
    async createLegalSupports(legalSupportsDTO) {
        const task = await this.legalSupportsService.createLegalSupports(legalSupportsDTO);
        return task ? task :
            { statusCode: 503, message: "This legal supports was not created", error: "Create Error" };
    }
    async updateLegalSupports(legalSupportsDTO) {
        const task = await this.legalSupportsService.updateLegalSupports(legalSupportsDTO.id, legalSupportsDTO);
        return task ? task : { statusCode: '404', message: 'Legal Supports found', error: "Not found" };
    }
    async deleteLegalSupports(id_legalSupports) {
        const { affected } = await this.legalSupportsService.deleteLegalSupports(id_legalSupports);
        return affected == 0
            ? { statusCode: '404', message: 'Legal Support not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllLegalSupports' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "getAllLegalSupportss", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getLegalSupportsById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "getLegalSupportsById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createLegalSupports' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_supports_dto_1.LegalSupportsDTO]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "createLegalSupports", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateLegalSupports' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_supports_dto_1.LegalSupportsDTO]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "updateLegalSupports", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteLegalSupports' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "deleteLegalSupports", null);
LegalSupportsController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiTags)('legal-supports'),
    (0, common_1.Controller)('legal-supports'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [legal_supports_service_1.LegalSupportsService,
        common_1.Logger])
], LegalSupportsController);
exports.LegalSupportsController = LegalSupportsController;
//# sourceMappingURL=legal-supports.controller.js.map