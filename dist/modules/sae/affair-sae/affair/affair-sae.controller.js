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
exports.AffairSaeController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const affair_sae_service_1 = require("./affair-sae.service");
const affair_sae_dto_1 = require("./dto/affair-sae.dto");
let AffairSaeController = class AffairSaeController {
    constructor(affairSaeService, logger) {
        this.affairSaeService = affairSaeService;
        this.logger = logger;
    }
    async createAffairSae(affairSaeDto) {
        const affairSaeCreated = await this.affairSaeService.createAffairSae(affairSaeDto);
        return affairSaeCreated
            ? affairSaeCreated
            : { statusCode: 503, message: "This AffairSae  was not created", error: "Create Error" };
    }
    async getAllAffairSaes(pagination) {
        return await this.affairSaeService.getAllAffairsSae(pagination);
    }
    async getAffairSaeById(id) {
        const affairSaeFound = await this.affairSaeService.getAffairSaeById(id);
        return affairSaeFound
            ? affairSaeFound
            : { statusCode: '404', message: 'AffairSae not found', error: "Not found" };
    }
    async updateAffairSae(data) {
        const affairSaeUpdated = await this.affairSaeService.updateAffairSae(data.idToUpdate, data);
        return affairSaeUpdated
            ? affairSaeUpdated
            : { statusCode: '404', message: 'AffairSae  not found', error: "Not found" };
    }
    async deleteAffairSae(id) {
        const { affected } = await this.affairSaeService.deleteAffairSae(id);
        return affected == 0
            ? { statusCode: '404', message: 'AffairSae  not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createAffairSae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [affair_sae_dto_1.AffairSaeDto]),
    __metadata("design:returntype", Promise)
], AffairSaeController.prototype, "createAffairSae", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllAffairSaes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AffairSaeController.prototype, "getAllAffairSaes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAffairSaeById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairSaeController.prototype, "getAffairSaeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateAffairSae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AffairSaeController.prototype, "updateAffairSae", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAffairSae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairSaeController.prototype, "deleteAffairSae", null);
AffairSaeController = __decorate([
    (0, common_1.Controller)('affair-sae'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [affair_sae_service_1.AffairSaeService,
        winston_1.Logger])
], AffairSaeController);
exports.AffairSaeController = AffairSaeController;
//# sourceMappingURL=affair-sae.controller.js.map