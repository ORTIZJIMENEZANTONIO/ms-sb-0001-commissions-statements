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
exports.OriginController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const origin_service_1 = require("./origin.service");
const origin_dto_1 = require("./dto/origin.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let OriginController = class OriginController {
    constructor(originService, logger) {
        this.originService = originService;
        this.logger = logger;
    }
    async createOrigin(originDto) {
        const originCreated = await this.originService.createOrigin(originDto);
        return originCreated
            ? originCreated
            : { statusCode: 503, message: "This Origin was not created", error: "Create Error" };
    }
    async getAllOrigins(pagination) {
        return await this.originService.getAllOrigins(pagination);
    }
    async getOriginById(id) {
        const originFound = await this.originService.getOriginById(id);
        return originFound
            ? originFound
            : { statusCode: '404', message: 'Origin not found', error: "Not found" };
    }
    async updateOrigin(data) {
        const originUpdated = await this.originService.updateOrigin(data.idToUpdate, data);
        return originUpdated
            ? originUpdated
            : { statusCode: '404', message: 'Origin not found', error: "Not found" };
    }
    async deleteOrigin(id) {
        const { affected } = await this.originService.deleteOrigin(id);
        return affected == 0
            ? { statusCode: '404', message: 'Origin not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createOrigin' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [origin_dto_1.OriginDto]),
    __metadata("design:returntype", Promise)
], OriginController.prototype, "createOrigin", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllOrigins' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], OriginController.prototype, "getAllOrigins", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOriginById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OriginController.prototype, "getOriginById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateOrigin' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OriginController.prototype, "updateOrigin", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteOrigin' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OriginController.prototype, "deleteOrigin", null);
OriginController = __decorate([
    (0, common_1.Controller)('origin'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [origin_service_1.OriginService,
        winston_1.Logger])
], OriginController);
exports.OriginController = OriginController;
//# sourceMappingURL=origin.controller.js.map