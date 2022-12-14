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
exports.OfficialLegendsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const official_legends_service_1 = require("./official_legends.service");
const official_legends_dto_1 = require("./dto/official_legends.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let OfficialLegendsController = class OfficialLegendsController {
    constructor(officialLegendsService, logger) {
        this.officialLegendsService = officialLegendsService;
        this.logger = logger;
    }
    async getAllOfficialLegends(paginationDto) {
        return await this.officialLegendsService.getAllOfficialLegends(paginationDto);
    }
    async createOfficialLegend(officialLegendsDto) {
        const response = await this.officialLegendsService.createOfficialLegend(officialLegendsDto);
        if (!response) {
            return { statusCode: 500, message: "This official legend doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findOfficialLegend(id) {
        const response = await this.officialLegendsService.findOfficialLegend(id);
        if (!response) {
            return { statusCode: 404, message: "This official legend doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateOfficialLegend(officialLegendsDto) {
        const response = await this.officialLegendsService.updateOfficialLegend(officialLegendsDto);
        if (!response) {
            return { statusCode: 400, message: "This official legend doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteOfficialLegend(id) {
        const remove = await this.officialLegendsService.deleteOfficialLegend(id);
        if (remove) {
            return { statusCode: 400, message: "This official legend doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllOfficialLegends' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], OfficialLegendsController.prototype, "getAllOfficialLegends", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createOfficialLegend' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [official_legends_dto_1.OfficialLegendsDto]),
    __metadata("design:returntype", Promise)
], OfficialLegendsController.prototype, "createOfficialLegend", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findOfficialLegend' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OfficialLegendsController.prototype, "findOfficialLegend", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateOfficialLegend' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [official_legends_dto_1.OfficialLegendsDto]),
    __metadata("design:returntype", Promise)
], OfficialLegendsController.prototype, "updateOfficialLegend", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteOfficialLegend' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OfficialLegendsController.prototype, "deleteOfficialLegend", null);
OfficialLegendsController = __decorate([
    (0, common_1.Controller)('official-legends'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [official_legends_service_1.OfficialLegendsService, winston_1.Logger])
], OfficialLegendsController);
exports.OfficialLegendsController = OfficialLegendsController;
//# sourceMappingURL=official_legends.controller.js.map