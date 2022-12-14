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
exports.CoordinatingAuthorityController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const coordinating_authority_service_1 = require("./coordinating-authority.service");
const coordinating_authority_dto_1 = require("./dto/coordinating-authority.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let CoordinatingAuthorityController = class CoordinatingAuthorityController {
    constructor(coordinatingAuthorityService, logger) {
        this.coordinatingAuthorityService = coordinatingAuthorityService;
        this.logger = logger;
    }
    async createcoordinatingAuthority(coordinatingAuthorityDto) {
        const coordinatingAuthorityCreated = await this.coordinatingAuthorityService.createCoordinatingAuthority(coordinatingAuthorityDto);
        return coordinatingAuthorityCreated
            ? coordinatingAuthorityCreated
            : { statusCode: 503, message: "This Coordinating Authority was not created", error: "Create Error" };
    }
    async getAllCoordinatingAuthorities({ inicio, pageSize }) {
        return await this.coordinatingAuthorityService.getAllCoordinatingAuthorities({ inicio, pageSize });
    }
    async getcoordinatingAuthorityById(id) {
        const coordinatingAuthorityFound = await this.coordinatingAuthorityService.getCoordinatingAuthorityById(id);
        return coordinatingAuthorityFound
            ? coordinatingAuthorityFound
            : { statusCode: '404', message: 'Coordinating Authority not found', error: "Not found" };
    }
    async updatecoordinatingAuthority(data) {
        const coordinatingAuthorityUpdated = await this.coordinatingAuthorityService.updateCoordinatingAuthority(data.idToUpdate, data);
        return coordinatingAuthorityUpdated
            ? coordinatingAuthorityUpdated
            : { statusCode: '404', message: 'Coordinating Authority not found', error: "Not found" };
    }
    async deletecoordinatingAuthority(id) {
        const { affected } = await this.coordinatingAuthorityService.deleteCoordinatingAuthority(id);
        return affected == 0
            ? { statusCode: '404', message: 'Coordinating Authority not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createCoordinatingAuthority' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coordinating_authority_dto_1.CoordinatingAuthorityDto]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "createcoordinatingAuthority", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllCoordinatingAuthorities' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "getAllCoordinatingAuthorities", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getCoordinatingAuthorityById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "getcoordinatingAuthorityById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateCoordinatingAuthority' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "updatecoordinatingAuthority", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteCoordinatingAuthority' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "deletecoordinatingAuthority", null);
CoordinatingAuthorityController = __decorate([
    (0, common_1.Controller)('coordinating-authority'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [coordinating_authority_service_1.CoordinatingAuthorityService,
        winston_1.Logger])
], CoordinatingAuthorityController);
exports.CoordinatingAuthorityController = CoordinatingAuthorityController;
//# sourceMappingURL=coordinating-authority.controller.js.map