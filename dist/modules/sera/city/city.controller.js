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
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const city_service_1 = require("./city.service");
const city_dto_1 = require("./dto/city.dto");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    async getAllCitys(pagination) {
        return await this.cityService.getAllCity(pagination);
    }
    async getCityById(id) {
        return await this.cityService.getCityById(id);
    }
    async createCity(cityDTO) {
        const task = await this.cityService.createCity(cityDTO);
        return task ? task :
            { statusCode: 503, message: "This general city was not created", error: "Create Error" };
    }
    async updateCity(cityDTO) {
        const task = await this.cityService.updateCity(cityDTO.id, cityDTO);
        return task ? task : { statusCode: '404', message: 'City not found', error: "Not found" };
    }
    async deleteCity(id_city) {
        const { affected } = await this.cityService.deleteCity(id_city);
        return affected == 0
            ? { statusCode: '404', message: 'City not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllCitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getAllCitys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getCitySeraById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getCityById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createCitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDTO]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "createCity", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateCitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDTO]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "updateCity", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteCitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "deleteCity", null);
CityController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('city-sera'),
    (0, swagger_1.ApiTags)('city-sera'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map