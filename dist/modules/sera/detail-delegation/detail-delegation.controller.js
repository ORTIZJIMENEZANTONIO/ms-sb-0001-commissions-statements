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
exports.DetailDelegationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const detail_delegation_service_1 = require("./detail-delegation.service");
const detail_delegation_dto_1 = require("./dto/detail-delegation.dto");
let DetailDelegationController = class DetailDelegationController {
    constructor(detailDelegationService) {
        this.detailDelegationService = detailDelegationService;
    }
    async getAllDetailDelegations(pagination) {
        return await this.detailDelegationService.getAllDetailDelegation(pagination);
    }
    async getDetailDelegationById(id) {
        return await this.detailDelegationService.getDetailDelegationById(id);
    }
    async createDetailDelegation(detailDelegationDTO) {
        const task = await this.detailDelegationService.createDetailDelegation(detailDelegationDTO);
        return task ? task :
            { statusCode: 503, message: "This general detailDelegation was not created", error: "Create Error" };
    }
    async updateDetailDelegation(detailDelegationDTO) {
        const task = await this.detailDelegationService.updateDetailDelegation(detailDelegationDTO.id, detailDelegationDTO);
        return task ? task : { statusCode: '404', message: 'Detail delegation not found', error: "Not found" };
    }
    async deleteDetailDelegation(id_detailDelegation) {
        const { affected } = await this.detailDelegationService.deleteDetailDelegation(id_detailDelegation);
        return affected == 0
            ? { statusCode: '404', message: 'DetailDelegation not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllDetailDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "getAllDetailDelegations", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getDetailDelegationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "getDetailDelegationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createDetailDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_delegation_dto_1.DetailDelegationDTO]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "createDetailDelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateDetailDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_delegation_dto_1.DetailDelegationDTO]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "updateDetailDelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteDetailDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "deleteDetailDelegation", null);
DetailDelegationController = __decorate([
    (0, common_1.Controller)('detail-delegation'),
    __metadata("design:paramtypes", [detail_delegation_service_1.DetailDelegationService])
], DetailDelegationController);
exports.DetailDelegationController = DetailDelegationController;
//# sourceMappingURL=detail-delegation.controller.js.map