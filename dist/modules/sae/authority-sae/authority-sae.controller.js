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
exports.AuthoritySaeController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const authority_sae_service_1 = require("./authority-sae.service");
const authority_sae_dto_1 = require("./dto/authority-sae.dto");
let AuthoritySaeController = class AuthoritySaeController {
    constructor(authoritySaeService, logger) {
        this.authoritySaeService = authoritySaeService;
        this.logger = logger;
    }
    async createAuthoritySae(authoritySaeDto) {
        const authorityCreated = await this.authoritySaeService.createAuthoritySae(authoritySaeDto);
        return authorityCreated
            ? authorityCreated
            : { statusCode: 503, message: "This authority was not created", error: "Create Error" };
    }
    async getAllAuthoritiesSae(pagination) {
        return await this.authoritySaeService.getAllAuthoritiesSae(pagination);
    }
    async getAuthoritySaeById(id) {
        const authorityFound = await this.authoritySaeService.getAuthoritySaeById(id);
        return authorityFound
            ? authorityFound
            : { statusCode: '404', message: 'authority not found', error: "Not found" };
    }
    async updateAuthoritySae(data) {
        const authorityUpdated = await this.authoritySaeService.updateAuthoritySae(data.idToUpdate, data);
        return authorityUpdated
            ? authorityUpdated
            : { statusCode: '404', message: 'authority not found', error: "Not found" };
    }
    async deleteAuthoritySae(id) {
        const { affected } = await this.authoritySaeService.deleteAuthoritySae(id);
        return affected == 0
            ? { statusCode: '404', message: 'authority not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createAuthoritySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authority_sae_dto_1.AuthoritySaeDto]),
    __metadata("design:returntype", Promise)
], AuthoritySaeController.prototype, "createAuthoritySae", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllAuthoritiesSae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AuthoritySaeController.prototype, "getAllAuthoritiesSae", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAuthoritySaeById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthoritySaeController.prototype, "getAuthoritySaeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateAuthoritySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthoritySaeController.prototype, "updateAuthoritySae", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAuthoritySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthoritySaeController.prototype, "deleteAuthoritySae", null);
AuthoritySaeController = __decorate([
    (0, common_1.Controller)('authority-sae'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [authority_sae_service_1.AuthoritySaeService,
        winston_1.Logger])
], AuthoritySaeController);
exports.AuthoritySaeController = AuthoritySaeController;
//# sourceMappingURL=authority-sae.controller.js.map