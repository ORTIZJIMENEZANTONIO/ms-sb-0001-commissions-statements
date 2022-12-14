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
exports.GoodSituacionController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const good_situacion_dto_1 = require("./dto/good-situacion.dto");
const good_situacion_service_1 = require("./good-situacion.service");
let GoodSituacionController = class GoodSituacionController {
    constructor(goodSituacionService) {
        this.goodSituacionService = goodSituacionService;
    }
    async getAllGoodSituacions(pagination) {
        return await this.goodSituacionService.getAllGoodSituacion(pagination);
    }
    async getGoodSituacionById(id) {
        return await this.goodSituacionService.getGoodSituacionById(id);
    }
    async createGoodSituacion(goodSituacionDTO) {
        const task = await this.goodSituacionService.createGoodSituacion(goodSituacionDTO);
        return task ? task :
            { statusCode: 503, message: "This general goodSituacion was not created", error: "Create Error" };
    }
    async updateGoodSituacion(goodSituacionDTO) {
        const task = await this.goodSituacionService.updateGoodSituacion(goodSituacionDTO.id, goodSituacionDTO);
        return task ? task : { statusCode: '404', message: 'GoodSituacion not found', error: "Not found" };
    }
    async deleteGoodSituacion(id_goodSituacion) {
        const { affected } = await this.goodSituacionService.deleteGoodSituacion(id_goodSituacion);
        return affected == 0
            ? { statusCode: '404', message: 'GoodSituacion not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGoodSituacion' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodSituacionController.prototype, "getAllGoodSituacions", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodSituacionById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSituacionController.prototype, "getGoodSituacionById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGoodSituacion' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_situacion_dto_1.GoodSituacionDTO]),
    __metadata("design:returntype", Promise)
], GoodSituacionController.prototype, "createGoodSituacion", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGoodSituacion' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_situacion_dto_1.GoodSituacionDTO]),
    __metadata("design:returntype", Promise)
], GoodSituacionController.prototype, "updateGoodSituacion", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGoodSituacion' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSituacionController.prototype, "deleteGoodSituacion", null);
GoodSituacionController = __decorate([
    (0, common_1.Controller)('good-situacion'),
    __metadata("design:paramtypes", [good_situacion_service_1.GoodSituacionService])
], GoodSituacionController);
exports.GoodSituacionController = GoodSituacionController;
//# sourceMappingURL=good-situacion.controller.js.map