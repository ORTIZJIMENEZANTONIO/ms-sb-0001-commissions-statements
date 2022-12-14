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
exports.DelegationStateController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const delegation_state_service_1 = require("./delegation-state.service");
const create_delegation_state_dto_1 = require("./dto/create-delegation-state.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let DelegationStateController = class DelegationStateController {
    constructor(delegationStateService, logger) {
        this.delegationStateService = delegationStateService;
        this.logger = logger;
    }
    async createDelegationState(delegationStateDto) {
        const delegationStateCreated = await this.delegationStateService.createDelegationState(delegationStateDto);
        return delegationStateCreated
            ? delegationStateCreated
            : { statusCode: 503, message: "This delegation state was not created", error: "Create Error" };
    }
    async getAllDelegationStates({ inicio, pageSize }) {
        return await this.delegationStateService.getAllDelegationStates({ inicio, pageSize });
    }
    async getDelegationStateById(id) {
        const delegationStateFound = await this.delegationStateService.getDelegationStateById(id);
        return delegationStateFound
            ? delegationStateFound
            : { statusCode: '404', message: 'Delegation State not found', error: "Not found" };
    }
    async updateDelegationState(data) {
        const delegationUpdated = await this.delegationStateService.updateDelegationState(data.idToUpdate, data);
        return delegationUpdated
            ? delegationUpdated
            : { statusCode: '404', message: 'Delegation State not found', error: "Not found" };
    }
    async deleteDelegationState(id) {
        const affected = await this.delegationStateService.deleteDelegationState(id);
        return !affected
            ? { statusCode: '404', message: 'Delegation State not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createDelegationState' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delegation_state_dto_1.DelegationStateDto]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "createDelegationState", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllDelegationStates' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "getAllDelegationStates", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getDelegationStateById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "getDelegationStateById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateDelegationState' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "updateDelegationState", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteDelegationState' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "deleteDelegationState", null);
DelegationStateController = __decorate([
    (0, common_1.Controller)('delegation-state'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [delegation_state_service_1.DelegationStateService,
        winston_1.Logger])
], DelegationStateController);
exports.DelegationStateController = DelegationStateController;
//# sourceMappingURL=delegation-state.controller.js.map