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
exports.NormsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const norms_service_1 = require("./norms.service");
const norms_dto_1 = require("./dto/norms.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let NormsController = class NormsController {
    constructor(normsService, logger) {
        this.normsService = normsService;
        this.logger = logger;
    }
    async getAllNorms(paginationDto) {
        return await this.normsService.getAllNorms(paginationDto);
    }
    async createNorm(normsDto) {
        const response = await this.normsService.createNorm(normsDto);
        if (!response) {
            return { statusCode: 500, message: "This norm doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findNorm(id) {
        const response = await this.normsService.findNorm(id);
        if (!response) {
            return { statusCode: 404, message: "This norm doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateNorm(normsDto) {
        const response = await this.normsService.updateNorm(normsDto);
        if (!response) {
            return { statusCode: 400, message: "This norm doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteNorm(id) {
        const { affected } = await this.normsService.deleteNorm(id);
        if (affected == 0) {
            return { statusCode: 400, message: "This norm doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllNorms' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], NormsController.prototype, "getAllNorms", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createNorm' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [norms_dto_1.NormsDto]),
    __metadata("design:returntype", Promise)
], NormsController.prototype, "createNorm", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findNorm' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NormsController.prototype, "findNorm", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateNorm' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [norms_dto_1.NormsDto]),
    __metadata("design:returntype", Promise)
], NormsController.prototype, "updateNorm", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteNorm' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NormsController.prototype, "deleteNorm", null);
NormsController = __decorate([
    (0, common_1.Controller)('norms'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [norms_service_1.NormsService, winston_1.Logger])
], NormsController);
exports.NormsController = NormsController;
//# sourceMappingURL=norms.controller.js.map