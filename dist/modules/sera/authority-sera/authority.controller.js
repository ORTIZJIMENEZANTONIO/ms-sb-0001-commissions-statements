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
exports.AuthorityController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const authority_service_1 = require("./authority.service");
const authority_dto_1 = require("./dto/authority.dto");
let AuthorityController = class AuthorityController {
    constructor(authorityService, logger) {
        this.authorityService = authorityService;
        this.logger = logger;
    }
    async createAuthority(authorityDto) {
        const authorityCreated = await this.authorityService.createAuthority(authorityDto);
        return authorityCreated
            ? authorityCreated
            : { statusCode: 503, message: "This authority was not created", error: "Create Error" };
    }
    async getAllAuthorities(pagination) {
        return await this.authorityService.getAllAuthorities(pagination);
    }
    async getAuthorityById(id) {
        const authorityFound = await this.authorityService.getAuthorityById(id);
        return authorityFound
            ? authorityFound
            : { statusCode: '404', message: 'authority not found', error: "Not found" };
    }
    async updateAuthority(data) {
        const authorityUpdated = await this.authorityService.updateAuthority(data.idToUpdate, data);
        return authorityUpdated
            ? authorityUpdated
            : { statusCode: '404', message: 'authority not found', error: "Not found" };
    }
    async deleteAuthority(id) {
        const { affected } = await this.authorityService.deleteAuthority(id);
        return affected == 0
            ? { statusCode: '404', message: 'authority not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createAuthority' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authority_dto_1.AuthorityDto]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "createAuthority", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllAuthorities' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "getAllAuthorities", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAuthorityById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "getAuthorityById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateAuthority' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "updateAuthority", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAuthority' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "deleteAuthority", null);
AuthorityController = __decorate([
    (0, common_1.Controller)('authority-sera'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [authority_service_1.AuthorityService,
        winston_1.Logger])
], AuthorityController);
exports.AuthorityController = AuthorityController;
//# sourceMappingURL=authority.controller.js.map