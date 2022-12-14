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
exports.GenericsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const generics_service_1 = require("./generics.service");
const generics_dto_1 = require("./dto/generics.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let GenericsController = class GenericsController {
    constructor(genericsService, logger) {
        this.genericsService = genericsService;
        this.logger = logger;
    }
    async getAllGenerics(paginationDto) {
        return await this.genericsService.getAllGenerics(paginationDto);
    }
    async createGeneric(genericDto) {
        const response = await this.genericsService.createGeneric(genericDto);
        if (!response) {
            return { statusCode: 500, message: "This status doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findGeneric(name) {
        const response = await this.genericsService.findGeneric(name);
        if (!response) {
            return { statusCode: 404, message: "This Generic doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateGeneric(GenericsDto) {
        const response = await this.genericsService.updateGeneric(GenericsDto);
        if (!response) {
            return { statusCode: 400, message: "This generic doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteGeneric(name) {
        const remove = await this.genericsService.deleteGeneric(name);
        if (!remove) {
            return { statusCode: 400, message: "This generic doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGenerics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GenericsController.prototype, "getAllGenerics", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGeneric' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generics_dto_1.GenericsDto]),
    __metadata("design:returntype", Promise)
], GenericsController.prototype, "createGeneric", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findGeneric' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenericsController.prototype, "findGeneric", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGeneric' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenericsController.prototype, "updateGeneric", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGeneric' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenericsController.prototype, "deleteGeneric", null);
GenericsController = __decorate([
    (0, common_1.Controller)('generics'),
    (0, common_1.Catch)(microservices_1.RpcException),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [generics_service_1.GenericsService, winston_1.Logger])
], GenericsController);
exports.GenericsController = GenericsController;
//# sourceMappingURL=generics.controller.js.map