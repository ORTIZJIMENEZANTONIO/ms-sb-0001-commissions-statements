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
exports.MunicipalityController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const municipality_service_1 = require("./municipality.service");
const municipality_dto_1 = require("./dto/municipality.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let MunicipalityController = class MunicipalityController {
    constructor(municipalityService, logger) {
        this.municipalityService = municipalityService;
        this.logger = logger;
    }
    async getAllMunicipalitys(paginationDto) {
        return await this.municipalityService.getAllMunicipalitys(paginationDto);
    }
    async createMunicipality(municipalityDto) {
        const response = await this.municipalityService.createMunicipality(municipalityDto);
        if (!response) {
            return { statusCode: 500, message: "This municipality doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findMunicipality(key) {
        const response = await this.municipalityService.findMunicipality(key);
        if (!response) {
            return { statusCode: 404, message: "This municipality doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateMunicipality(municipalityDto) {
        const response = await this.municipalityService.updateMunicipality(municipalityDto);
        if (!response) {
            return { statusCode: 400, message: "This municipality doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteMunicipality(key) {
        const { affected } = await this.municipalityService.deleteMunicipality(key);
        if (affected == 0) {
            return { statusCode: 400, message: "This municipality doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllMunicipalitysSae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "getAllMunicipalitys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createMunicipalitySae' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [municipality_dto_1.MunicipalityDto]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "createMunicipality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findMunicipalitySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "findMunicipality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateMunicipalitySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "updateMunicipality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteMunicipalitySae' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "deleteMunicipality", null);
MunicipalityController = __decorate([
    (0, common_1.Controller)('municipality-sae'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [municipality_service_1.MunicipalityService, winston_1.Logger])
], MunicipalityController);
exports.MunicipalityController = MunicipalityController;
//# sourceMappingURL=municipality.controller.js.map