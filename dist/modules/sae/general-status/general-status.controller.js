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
exports.GeneralStatusController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const general_status_service_1 = require("./general-status.service");
const general_status_dto_1 = require("./dto/general-status.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let GeneralStatusController = class GeneralStatusController {
    constructor(generalStatusService, logger) {
        this.generalStatusService = generalStatusService;
        this.logger = logger;
    }
    async createGeneralStatus(generalStatusDto) {
        const generalStatusCreated = await this.generalStatusService.createGeneralStatus(generalStatusDto);
        return generalStatusCreated
            ? generalStatusCreated
            : { statusCode: 503, message: "This general status was not created", error: "Create Error" };
    }
    async getAllGeneralStatus({ inicio, pageSize }) {
        return await this.generalStatusService.getAllGeneralStatus({ inicio, pageSize });
    }
    async getGeneralStatusByStatusGeneral(statusGeneral) {
        const generalStatusFound = await this.generalStatusService.getGeneralStatusByStatusGeneral(statusGeneral);
        return generalStatusFound
            ? generalStatusFound
            : { statusCode: '404', message: 'General Status not found', error: "Not found" };
    }
    async updateGeneralStatus(data) {
        const generalStatusFound = await this.generalStatusService.updateGeneralStatus(data.statusGeneralToUpdate, data);
        return generalStatusFound
            ? generalStatusFound
            : { statusCode: '404', message: 'General Status not found', error: "Not found" };
    }
    async deleteGeneralStatus(statusGeneral) {
        const { affected } = await this.generalStatusService.deleteGeneralStatus(statusGeneral);
        return affected == 0
            ? { statusCode: '404', message: 'General Status not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createGeneralStatus' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [general_status_dto_1.GeneralStatusDto]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "createGeneralStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllGeneralStatus' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "getAllGeneralStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getGeneralStatusByStatusGeneral' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "getGeneralStatusByStatusGeneral", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateGeneralStatus' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "updateGeneralStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteGeneralStatus' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "deleteGeneralStatus", null);
GeneralStatusController = __decorate([
    (0, common_1.Controller)('general-status'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [general_status_service_1.GeneralStatusService,
        winston_1.Logger])
], GeneralStatusController);
exports.GeneralStatusController = GeneralStatusController;
//# sourceMappingURL=general-status.controller.js.map