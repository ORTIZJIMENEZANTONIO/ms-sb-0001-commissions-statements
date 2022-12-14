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
exports.SiseProcessController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const sise_process_service_1 = require("./sise-process.service");
const sise_process_dto_1 = require("./dto/sise-process.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let SiseProcessController = class SiseProcessController {
    constructor(siseProcessService, logger) {
        this.siseProcessService = siseProcessService;
        this.logger = logger;
    }
    async createSiseProcess(siseProcessDto) {
        const siseProcessCreated = await this.siseProcessService.createSiseProcess(siseProcessDto);
        return siseProcessCreated
            ? siseProcessCreated
            : { statusCode: 503, message: "This Sise Process was not created", error: "Create Error" };
    }
    async getAllSiseProcess(pagination) {
        return await this.siseProcessService.getAllSiseProcess(pagination);
    }
    async getSiseProcessById(id) {
        const siseProcessFound = await this.siseProcessService.getSiseProcessById(id);
        return siseProcessFound
            ? siseProcessFound
            : { statusCode: '404', message: 'Sise Process not found', error: "Not found" };
    }
    async updateSiseProcess(data) {
        const siseProcessUpdated = await this.siseProcessService.updateSiseProcess(data.idToUpdate, data);
        return siseProcessUpdated
            ? siseProcessUpdated
            : { statusCode: '404', message: 'SiseProcess not found', error: "Not found" };
    }
    async deleteSiseProcess(id) {
        const { affected } = await this.siseProcessService.deleteSiseProcess(id);
        return affected == 0
            ? { statusCode: '404', message: 'SiseProcess not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSiseProcess' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sise_process_dto_1.SiseProcessDto]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "createSiseProcess", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSiseProcess' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "getAllSiseProcess", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSiseProcessById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "getSiseProcessById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSiseProcess' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "updateSiseProcess", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSiseProcess' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "deleteSiseProcess", null);
SiseProcessController = __decorate([
    (0, common_1.Controller)('sise-process'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [sise_process_service_1.SiseProcessService,
        winston_1.Logger])
], SiseProcessController);
exports.SiseProcessController = SiseProcessController;
//# sourceMappingURL=sise-process.controller.js.map