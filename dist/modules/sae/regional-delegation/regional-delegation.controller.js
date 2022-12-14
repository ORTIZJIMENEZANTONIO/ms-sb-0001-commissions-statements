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
exports.RegionalDelegationController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const regional_delegation_service_1 = require("./regional-delegation.service");
const regional_delegation_dto_1 = require("./dto/regional-delegation.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let RegionalDelegationController = class RegionalDelegationController {
    constructor(regionalDelegationService, logger) {
        this.regionalDelegationService = regionalDelegationService;
        this.logger = logger;
    }
    async createRegionalDelegation(regionalDelegationDto) {
        const regionalDelegationCreated = await this.regionalDelegationService.createRegionalDelegation(regionalDelegationDto);
        return regionalDelegationCreated
            ? regionalDelegationCreated
            : { statusCode: 503, message: "This regional delegation was not created", error: "Create Error" };
    }
    async getAllRegionalDelegations({ inicio, pageSize }) {
        return await this.regionalDelegationService.getAllRegionalDelegations({ inicio, pageSize });
    }
    async getRegionalDelegationById(id) {
        const regionalDelegationFound = await this.regionalDelegationService.getRegionalDelegationById(id);
        return regionalDelegationFound
            ? regionalDelegationFound
            : { statusCode: '404', message: 'Regional Delegation not found', error: "Not found" };
    }
    async updateRegionalDelegation(regionalData) {
        const regionalDelegationFound = await this.regionalDelegationService.updateRegionalDelegation(regionalData.idToUpdate, regionalData);
        return regionalDelegationFound
            ? regionalDelegationFound
            : { statusCode: '404', message: 'Regional Delegation not found', error: "Not found" };
    }
    async deleteRegionalDelegation(id) {
        const affected = await this.regionalDelegationService.deleteRegionalDelegation(id);
        return !affected
            ? { statusCode: '404', message: 'Regional Delegation not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createRegionalDelegation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regional_delegation_dto_1.RegionalDelegationDto]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "createRegionalDelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllRegionalDelegations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "getAllRegionalDelegations", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getRegionalDelegationById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "getRegionalDelegationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateRegionalDelegation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "updateRegionalDelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteRegionalDelegation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "deleteRegionalDelegation", null);
RegionalDelegationController = __decorate([
    (0, common_1.Controller)('regional-delegation'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [regional_delegation_service_1.RegionalDelegationService,
        winston_1.Logger])
], RegionalDelegationController);
exports.RegionalDelegationController = RegionalDelegationController;
//# sourceMappingURL=regional-delegation.controller.js.map