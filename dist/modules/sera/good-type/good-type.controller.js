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
exports.GoodTypeController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const good_type_dto_1 = require("./dto/good-type.dto");
const good_type_service_1 = require("./good-type.service");
let GoodTypeController = class GoodTypeController {
    constructor(goodTypeService) {
        this.goodTypeService = goodTypeService;
    }
    async getAllGoodTypes(pagination) {
        return await this.goodTypeService.getAllGoodType(pagination);
    }
    async getGoodTypeById(id) {
        return await this.goodTypeService.getGoodTypeById(id);
    }
    async createGoodType(goodTypeDTO) {
        const task = await this.goodTypeService.createGoodType(goodTypeDTO);
        return task ? task :
            { statusCode: 503, message: "This general goodType was not created", error: "Create Error" };
    }
    async updateGoodType(goodTypeDTO) {
        const task = await this.goodTypeService.updateGoodType(goodTypeDTO.id, goodTypeDTO);
        return task ? task : { statusCode: '404', message: 'GoodType not found', error: "Not found" };
    }
    async deleteGoodType(id_goodType) {
        const { affected } = await this.goodTypeService.deleteGoodType(id_goodType);
        return affected == 0
            ? { statusCode: '404', message: 'GoodType not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGoodTypeSera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodTypeController.prototype, "getAllGoodTypes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodTypeSeraById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodTypeController.prototype, "getGoodTypeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGoodTypeSera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_type_dto_1.GoodTypeDTO]),
    __metadata("design:returntype", Promise)
], GoodTypeController.prototype, "createGoodType", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGoodTypeSera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_type_dto_1.GoodTypeDTO]),
    __metadata("design:returntype", Promise)
], GoodTypeController.prototype, "updateGoodType", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGoodTypeSera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodTypeController.prototype, "deleteGoodType", null);
GoodTypeController = __decorate([
    (0, common_1.Controller)('good-type'),
    __metadata("design:paramtypes", [good_type_service_1.GoodTypeService])
], GoodTypeController);
exports.GoodTypeController = GoodTypeController;
//# sourceMappingURL=good-type.controller.js.map