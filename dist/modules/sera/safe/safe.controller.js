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
exports.SafeController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const safe_service_1 = require("./safe.service");
const safe_dto_1 = require("./dto/safe.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let SafeController = class SafeController {
    constructor(safeService, logger) {
        this.safeService = safeService;
        this.logger = logger;
    }
    async createSafe(safeDto) {
        const safeCreated = await this.safeService.createSafe(safeDto);
        return safeCreated
            ? safeCreated
            : { statusCode: 503, message: "This safe was not created", error: "Create Error" };
    }
    async getAllSafes({ inicio, pageSize }) {
        return await this.safeService.getAllSafes({ inicio, pageSize });
    }
    async getSafeById(id) {
        const safeFound = await this.safeService.getSafeById(id);
        return safeFound
            ? safeFound
            : { statusCode: '404', message: 'Safe not found', error: "Not found" };
    }
    async updateSafe(data) {
        const safeUpdated = await this.safeService.updateSafe(data.idToUpdate, data);
        return safeUpdated
            ? safeUpdated
            : { statusCode: '404', message: 'Safe not found', error: "Not found" };
    }
    async deleteSafe(id) {
        const { affected } = await this.safeService.deleteSafe(id);
        return affected == 0
            ? { statusCode: '404', message: 'Safe not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSafe' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [safe_dto_1.SafeDto]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "createSafe", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSafes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "getAllSafes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSafeById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "getSafeById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSafe' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "updateSafe", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSafe' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "deleteSafe", null);
SafeController = __decorate([
    (0, common_1.Controller)('safe'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [safe_service_1.SafeService,
        winston_1.Logger])
], SafeController);
exports.SafeController = SafeController;
//# sourceMappingURL=safe.controller.js.map