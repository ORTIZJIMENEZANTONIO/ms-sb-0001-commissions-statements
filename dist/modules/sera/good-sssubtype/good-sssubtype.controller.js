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
exports.GoodSssubtypeController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const good_sssubtype_dto_1 = require("./dto/good-sssubtype.dto");
const good_sssubtype_service_1 = require("./good-sssubtype.service");
let GoodSssubtypeController = class GoodSssubtypeController {
    constructor(goodSssubtypeService) {
        this.goodSssubtypeService = goodSssubtypeService;
    }
    async getAllGoodSssubtypes(pagination) {
        return await this.goodSssubtypeService.getAllGoodSssubtype(pagination);
    }
    async getGoodSssubtypeById(id) {
        return await this.goodSssubtypeService.getGoodSssubtypeById(id);
    }
    async createGoodSssubtype(goodSssubtypeDTO) {
        const task = await this.goodSssubtypeService.createGoodSssubtype(goodSssubtypeDTO);
        return task ? task :
            { statusCode: 503, message: "This general goodSssubtype was not created", error: "Create Error" };
    }
    async updateGoodSssubtype(goodSssubtypeDTO) {
        const task = await this.goodSssubtypeService.updateGoodSssubtype(goodSssubtypeDTO.id, goodSssubtypeDTO);
        return task ? task : { statusCode: '404', message: 'GoodSssubtype not found', error: "Not found" };
    }
    async deleteGoodSssubtype(id_goodSssubtype) {
        const { affected } = await this.goodSssubtypeService.deleteGoodSssubtype(id_goodSssubtype);
        return affected == 0
            ? { statusCode: '404', message: 'GoodSssubtype not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGoodSssubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodSssubtypeController.prototype, "getAllGoodSssubtypes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodSssubtypeById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSssubtypeController.prototype, "getGoodSssubtypeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGoodSssubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_sssubtype_dto_1.GoodSssubtypeDTO]),
    __metadata("design:returntype", Promise)
], GoodSssubtypeController.prototype, "createGoodSssubtype", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGoodSssubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_sssubtype_dto_1.GoodSssubtypeDTO]),
    __metadata("design:returntype", Promise)
], GoodSssubtypeController.prototype, "updateGoodSssubtype", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGoodSssubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSssubtypeController.prototype, "deleteGoodSssubtype", null);
GoodSssubtypeController = __decorate([
    (0, common_1.Controller)('good-sssubtype'),
    __metadata("design:paramtypes", [good_sssubtype_service_1.GoodSssubtypeService])
], GoodSssubtypeController);
exports.GoodSssubtypeController = GoodSssubtypeController;
//# sourceMappingURL=good-sssubtype.controller.js.map