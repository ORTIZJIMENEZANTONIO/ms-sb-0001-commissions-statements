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
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const city_service_1 = require("./city.service");
const city_dto_1 = require("./dto/city.dto");
let CityController = class CityController {
    constructor(cityService, logger) {
        this.cityService = cityService;
        this.logger = logger;
    }
    async createCity(CityDto) {
        const citytCreated = await this.cityService.createCity(CityDto);
        return citytCreated
            ? citytCreated
            : { statusCode: 503, message: "This City was not created", error: "Create Error" };
    }
    async getAllCities(pagination) {
        return await this.cityService.getAllCities(pagination);
    }
    async getCitytByCode(code) {
        const CitytFound = await this.cityService.getCityByCode(code);
        return CitytFound
            ? CitytFound
            : { statusCode: '404', message: 'City not found', error: "Not found" };
    }
    async updateCity(data) {
        const citytUpdated = await this.cityService.updateCity(data.codeToUpdate, data);
        return citytUpdated
            ? citytUpdated
            : { statusCode: '404', message: 'City not found', error: "Not found" };
    }
    async deleteCity(code) {
        const { affected } = await this.cityService.deleteCity(code);
        return affected == 0
            ? { statusCode: '404', message: 'City not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createCity' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "createCity", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllCities' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getAllCities", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getCitytByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getCitytByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateCity' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "updateCity", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteCity' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "deleteCity", null);
CityController = __decorate([
    (0, common_1.Controller)('city-sae'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [city_service_1.CityService,
        winston_1.Logger])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map