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
exports.StatusProcessController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const status_process_service_1 = require("./status_process.service");
const status_process_1 = require("./dto/status_process");
const pagination_1 = require("../../../shared/dto/pagination");
let StatusProcessController = class StatusProcessController {
    constructor(statusProcessService, logger) {
        this.statusProcessService = statusProcessService;
        this.logger = logger;
    }
    async getAllStatusService(paginationDto) {
        return await this.statusProcessService.getAllStatusService(paginationDto);
    }
    async findStatusService(status) {
        const response = await this.statusProcessService.findStatusService(status);
        if (!response) {
            return { statusCode: 404, message: "This status doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async createStatusService(statusProcessDto) {
        const response = await this.statusProcessService.createStatusService(statusProcessDto);
        if (!response) {
            return { statusCode: 500, message: "This status doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async updateStatusService(statusProcessDto) {
        const response = await this.statusProcessService.updateStatusService(statusProcessDto);
        if (!response) {
            return { statusCode: 400, message: "This status doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async DeleteEstatusService(status) {
        const { affected } = await this.statusProcessService.deleteStatusService(status);
        if (affected == 0) {
            return { statusCode: 400, message: "This status doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllStatusService' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StatusProcessController.prototype, "getAllStatusService", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findStatusService' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusProcessController.prototype, "findStatusService", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createStatusService' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_process_1.StatusProcessDto]),
    __metadata("design:returntype", Promise)
], StatusProcessController.prototype, "createStatusService", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateStatusService' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StatusProcessController.prototype, "updateStatusService", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteStatusService' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusProcessController.prototype, "DeleteEstatusService", null);
StatusProcessController = __decorate([
    (0, common_1.Controller)('status-process'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [status_process_service_1.StatusProcessService, winston_1.Logger])
], StatusProcessController);
exports.StatusProcessController = StatusProcessController;
//# sourceMappingURL=status_process.controller.js.map