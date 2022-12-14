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
exports.AffairController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const affair_service_1 = require("./affair.service");
const affair_dto_1 = require("./dto/affair.dto");
let AffairController = class AffairController {
    constructor(affairService, logger) {
        this.affairService = affairService;
        this.logger = logger;
    }
    async createAffair(affairDto) {
        const affairCreated = await this.affairService.createAffair(affairDto);
        return affairCreated
            ? affairCreated
            : { statusCode: 503, message: "This Affair  was not created", error: "Create Error" };
    }
    async getAllAffairs(pagination) {
        return await this.affairService.getAllAffairs(pagination);
    }
    async getAffairById(id) {
        const affairFound = await this.affairService.getAffairById(id);
        return affairFound
            ? affairFound
            : { statusCode: '404', message: 'Affair not found', error: "Not found" };
    }
    async updateAffair(data) {
        const affairUpdated = await this.affairService.updateAffair(data.idToUpdate, data);
        return affairUpdated
            ? affairUpdated
            : { statusCode: '404', message: 'Affair  not found', error: "Not found" };
    }
    async deleteAffair(id) {
        const { affected } = await this.affairService.deleteAffair(id);
        return affected == 0
            ? { statusCode: '404', message: 'Affair  not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createAffair' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [affair_dto_1.AffairDto]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "createAffair", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllAffairs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "getAllAffairs", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAffairById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "getAffairById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateAffair' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "updateAffair", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAffair' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "deleteAffair", null);
AffairController = __decorate([
    (0, common_1.Controller)('affair-sera'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [affair_service_1.AffairService,
        winston_1.Logger])
], AffairController);
exports.AffairController = AffairController;
//# sourceMappingURL=affair.controller.js.map