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
exports.FractionsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const fractions_service_1 = require("./fractions.service");
const fractions_dto_1 = require("./dto/fractions.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let FractionsController = class FractionsController {
    constructor(fractionsService, logger) {
        this.fractionsService = fractionsService;
        this.logger = logger;
    }
    async getAllFractions(paginationDto) {
        return await this.fractionsService.getAllFractions(paginationDto);
    }
    async findFraction(id) {
        const response = await this.fractionsService.findFraction(id);
        if (!response) {
            return { statusCode: 404, message: "This fraction doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async createFraction(fractionsDto) {
        const response = await this.fractionsService.createFraction(fractionsDto);
        if (!response) {
            return { statusCode: 500, message: "This status doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async updateFraction(FractionsDto) {
        const response = await this.fractionsService.updateFraction(FractionsDto);
        if (!response) {
            return { statusCode: 400, message: "This fraction doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteFraction(id) {
        const { affected } = await this.fractionsService.deleteFraction(id);
        if (affected == 0) {
            return { statusCode: 400, message: "This fraction doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllFractions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], FractionsController.prototype, "getAllFractions", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findFraction' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FractionsController.prototype, "findFraction", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createFraction' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fractions_dto_1.FractionsDto]),
    __metadata("design:returntype", Promise)
], FractionsController.prototype, "createFraction", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateFraction' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FractionsController.prototype, "updateFraction", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteFraction' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FractionsController.prototype, "deleteFraction", null);
FractionsController = __decorate([
    (0, common_1.Controller)('fractions'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [fractions_service_1.FractionsService, winston_1.Logger])
], FractionsController);
exports.FractionsController = FractionsController;
//# sourceMappingURL=fractions.controller.js.map