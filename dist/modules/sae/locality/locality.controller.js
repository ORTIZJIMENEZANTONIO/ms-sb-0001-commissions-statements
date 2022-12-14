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
exports.LocalityController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const locality_service_1 = require("./locality.service");
const locality_dto_1 = require("./dto/locality.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let LocalityController = class LocalityController {
    constructor(localityService, logger) {
        this.localityService = localityService;
        this.logger = logger;
    }
    async getAllLocalitys(pagination) {
        return await this.localityService.getAllLocalitys(pagination);
    }
    async createLocality(localityDto) {
        const response = await this.localityService.createLocality(localityDto);
        if (!response) {
            return { statusCode: 500, message: "This locality doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findLocality(key) {
        const response = await this.localityService.findLocality(key);
        if (!response) {
            return { statusCode: 404, message: "This locality doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateLocality(GenericsDto) {
        const response = await this.localityService.updateLocality(GenericsDto);
        if (!response) {
            return { statusCode: 400, message: "This locality doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteLocality(key) {
        const { affected } = await this.localityService.deleteLocality(key);
        if (affected == 0) {
            return { statusCode: 400, message: "This locality doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllLocalitysSae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "getAllLocalitys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createLocalitySae' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locality_dto_1.LocalityDto]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "createLocality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findLocalitySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "findLocality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateLocalitySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "updateLocality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteLocalitySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "deleteLocality", null);
LocalityController = __decorate([
    (0, common_1.Controller)('locality-sae'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [locality_service_1.LocalityService, winston_1.Logger])
], LocalityController);
exports.LocalityController = LocalityController;
//# sourceMappingURL=locality.controller.js.map