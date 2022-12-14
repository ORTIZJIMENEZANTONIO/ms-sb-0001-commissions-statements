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
exports.OriginCisiController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const origin_cisi_service_1 = require("./origin-cisi.service");
const origin_cisi_dto_1 = require("./dto/origin-cisi.dto");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
let OriginCisiController = class OriginCisiController {
    constructor(originCisiService, logger) {
        this.originCisiService = originCisiService;
        this.logger = logger;
    }
    async createOriginCisi(originCisiDto) {
        const originCisiCreated = await this.originCisiService.createOriginCisi(originCisiDto);
        return originCisiCreated
            ? originCisiCreated
            : { statusCode: 503, message: "This Origin was not created", error: "Create Error" };
    }
    async getAllOrigins(pagination) {
        return await this.originCisiService.getAllOriginCisis(pagination);
    }
    async getOriginCisiById(id) {
        const OriginFound = await this.originCisiService.getOriginCisiById(id);
        return OriginFound
            ? OriginFound
            : { statusCode: '404', message: 'Origin not found', error: "Not found" };
    }
    async updateOrigin(data) {
        const OriginUpdated = await this.originCisiService.updateOriginCisi(data.idToUpdate, data);
        return OriginUpdated
            ? OriginUpdated
            : { statusCode: '404', message: 'Origin not found', error: "Not found" };
    }
    async deleteOrigin(id) {
        const { affected } = await this.originCisiService.deleteOriginCisi(id);
        return affected == 0
            ? { statusCode: '404', message: 'Origin Cisi not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createOriginCisi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [origin_cisi_dto_1.OriginCisiDto]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "createOriginCisi", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllOriginCisis' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "getAllOrigins", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOriginCisiById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "getOriginCisiById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateOriginCisi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "updateOrigin", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteOriginCisi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "deleteOrigin", null);
OriginCisiController = __decorate([
    (0, common_1.Controller)('origin-cisi'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [origin_cisi_service_1.OriginCisiService,
        winston_1.Logger])
], OriginCisiController);
exports.OriginCisiController = OriginCisiController;
//# sourceMappingURL=origin-cisi.controller.js.map