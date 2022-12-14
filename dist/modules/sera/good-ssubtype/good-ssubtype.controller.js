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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodSsubtypeController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const good_Ssubtype_dto_1 = require("./dto/good-Ssubtype.dto");
const good_ssubtype_service_1 = require("./good-ssubtype.service");
let GoodSsubtypeController = class GoodSsubtypeController {
    constructor(goodSsubtypeService) {
        this.goodSsubtypeService = goodSsubtypeService;
    }
    async getAllGoodSsubtypes(pagination) {
        return await this.goodSsubtypeService.getAllGoodSsubtype(pagination);
    }
    async getGoodSsubtypeById(id) {
        return await this.goodSsubtypeService.getGoodSsubtypeById(id);
    }
    async createGoodSsubtype(goodSsubtypeDTO) {
        const task = await this.goodSsubtypeService.createGoodSsubtype(goodSsubtypeDTO);
        return task ? task :
            { statusCode: 503, message: "This general goodSsubtype was not created", error: "Create Error" };
    }
    async updateGoodSsubtype(goodSsubtypeDTO) {
        const task = await this.goodSsubtypeService.updateGoodSsubtype(goodSsubtypeDTO.id, goodSsubtypeDTO);
        return task ? task : { statusCode: '404', message: 'GoodSsubtype not found', error: "Not found" };
    }
    async deleteGoodSsubtype(id_goodSsubtype) {
        const { affected } = await this.goodSsubtypeService.deleteGoodSsubtype(id_goodSsubtype);
        return affected == 0
            ? { statusCode: '404', message: 'GoodSsubtype not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGoodSsubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "getAllGoodSsubtypes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGoodSsubtypeById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "getGoodSsubtypeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGoodSsubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof good_Ssubtype_dto_1.GoodSsubtypeDTO !== "undefined" && good_Ssubtype_dto_1.GoodSsubtypeDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "createGoodSsubtype", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGoodSsubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof good_Ssubtype_dto_1.GoodSsubtypeDTO !== "undefined" && good_Ssubtype_dto_1.GoodSsubtypeDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "updateGoodSsubtype", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGoodSsubtype' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "deleteGoodSsubtype", null);
GoodSsubtypeController = __decorate([
    (0, common_1.Controller)('good-ssubtype'),
    __metadata("design:paramtypes", [good_ssubtype_service_1.GoodSsubtypeService])
], GoodSsubtypeController);
exports.GoodSsubtypeController = GoodSsubtypeController;
//# sourceMappingURL=good-ssubtype.controller.js.map