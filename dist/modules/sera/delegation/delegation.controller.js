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
exports.DelegationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const delegation_service_1 = require("./delegation.service");
const delegation_dto_1 = require("./dto/delegation.dto");
let DelegationController = class DelegationController {
    constructor(delegationService) {
        this.delegationService = delegationService;
    }
    async getAllDelegations(pagination) {
        return await this.delegationService.getAllDelegation(pagination);
    }
    async getDelegationById(id) {
        return await this.delegationService.getDelegationById(id);
    }
    async createDelegation(delegationDTO) {
        const task = await this.delegationService.createDelegation(delegationDTO);
        return task ? task :
            { statusCode: 503, message: "This delegation was not created", error: "Create Error" };
    }
    async updateDelegation(delegationDTO) {
        const task = await this.delegationService.updateDelegation(delegationDTO.id, delegationDTO);
        return task ? task : { statusCode: '404', message: 'Delegation not found', error: "Not found" };
    }
    async deleteDelegation(id_delegation) {
        const { affected } = await this.delegationService.deleteDelegation(id_delegation);
        return affected == 0
            ? { statusCode: '404', message: 'Delegation not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "getAllDelegations", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getDelegationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "getDelegationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delegation_dto_1.DelegationDTO]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "createDelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delegation_dto_1.DelegationDTO]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "updateDelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteDelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "deleteDelegation", null);
DelegationController = __decorate([
    (0, common_1.Controller)('delegation'),
    __metadata("design:paramtypes", [delegation_service_1.DelegationService])
], DelegationController);
exports.DelegationController = DelegationController;
//# sourceMappingURL=delegation.controller.js.map