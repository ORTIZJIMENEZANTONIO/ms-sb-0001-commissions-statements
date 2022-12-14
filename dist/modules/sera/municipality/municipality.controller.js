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
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const municipality_dto_1 = require("./dto/municipality.dto");
const municipality_service_1 = require("./municipality.service");
let MunicipalityController = class MunicipalityController {
    constructor(municipalityService) {
        this.municipalityService = municipalityService;
    }
    async getAllMunicipalitys(pagination) {
        return await this.municipalityService.getAllMunicipality(pagination);
    }
    async getMunicipalityById(id) {
        return await this.municipalityService.getMunicipalityById(id);
    }
    async createMunicipality(municipalityDTO) {
        const task = await this.municipalityService.createMunicipality(municipalityDTO);
        return task ? task :
            { statusCode: 503, message: "This municipality was not created", error: "Create Error" };
    }
    async updateMunicipality(municipalityDTO) {
        const task = await this.municipalityService.updateMunicipality(municipalityDTO.id, municipalityDTO);
        return task ? task : { statusCode: '404', message: 'Municipality not found', error: "Not found" };
    }
    async deleteMunicipality(id_municipality) {
        const { affected } = await this.municipalityService.deleteMunicipality(id_municipality);
        return affected == 0
            ? { statusCode: '404', message: 'Municipality not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllMunicipalitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "getAllMunicipalitys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getMunicipalitySeraById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "getMunicipalityById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createMunicipalitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [municipality_dto_1.MunicipalityDTO]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "createMunicipality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateMunicipalitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [municipality_dto_1.MunicipalityDTO]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "updateMunicipality", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteMunicipalitySera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MunicipalityController.prototype, "deleteMunicipality", null);
MunicipalityController = __decorate([
    (0, common_1.Controller)('municipality'),
    __metadata("design:paramtypes", [municipality_service_1.MunicipalityService])
], MunicipalityController);
exports.MunicipalityController = MunicipalityController;
//# sourceMappingURL=municipality.controller.js.map