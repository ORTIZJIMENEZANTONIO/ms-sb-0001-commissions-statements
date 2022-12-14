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
exports.GoodsSubTypeController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const goods_subtype_dto_1 = require("./dto/goods-subtype.dto");
const goods_subtype_service_1 = require("./goods-subtype.service");
let GoodsSubTypeController = class GoodsSubTypeController {
    constructor(goodsSubTypeService, logger) {
        this.goodsSubTypeService = goodsSubTypeService;
        this.logger = logger;
    }
    async getAllGoodsSubTypes(pagination) {
        return await this.goodsSubTypeService.getAllGoodsSubType(pagination);
    }
    async getGoodsSubTypeById(id) {
        return await this.goodsSubTypeService.getGoodsSubTypeById(id);
    }
    async createGoodsSubType(goodsSubTypeDTO) {
        const task = await this.goodsSubTypeService.createGoodsSubType(goodsSubTypeDTO);
        return task ? task :
            { statusCode: 503, message: "This general goods subtype was not created", error: "Create Error" };
    }
    async updateGoodsSubType(goodsSubTypeDTO) {
        const task = await this.goodsSubTypeService.updateGoodsSubType(goodsSubTypeDTO.id, goodsSubTypeDTO);
        return task ? task : { statusCode: '404', message: 'Goods Subtype not found', error: "Not found" };
    }
    async deleteGoodsSubType(id_goodsSubType) {
        const { affected } = await this.goodsSubTypeService.deleteGoodsSubType(id_goodsSubType);
        return affected == 0
            ? { statusCode: '404', message: 'Goods Subtype not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGoodsSubTypeSae' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodsSubTypeController.prototype, "getAllGoodsSubTypes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodsSubTypeSaeById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsSubTypeController.prototype, "getGoodsSubTypeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGoodsSubTypeSae' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_subtype_dto_1.GoodsSubTypeDTO]),
    __metadata("design:returntype", Promise)
], GoodsSubTypeController.prototype, "createGoodsSubType", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGoodsSubTypeSae' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_subtype_dto_1.GoodsSubTypeDTO]),
    __metadata("design:returntype", Promise)
], GoodsSubTypeController.prototype, "updateGoodsSubType", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGoodsSubTypeSae' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsSubTypeController.prototype, "deleteGoodsSubType", null);
GoodsSubTypeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('goods-subtype'),
    (0, swagger_1.ApiTags)('goods-subtype'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [goods_subtype_service_1.GoodsSubtypeService,
        common_1.Logger])
], GoodsSubTypeController);
exports.GoodsSubTypeController = GoodsSubTypeController;
//# sourceMappingURL=goods-subtype.controller.js.map