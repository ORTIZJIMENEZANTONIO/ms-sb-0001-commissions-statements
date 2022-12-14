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
exports.ComerPenaltyController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const comer_penalty_service_1 = require("./comer-penalty.service");
const get_final_date_dto_1 = require("./dto/get-final-date.dto");
const release_penalty_dto_1 = require("./dto/release-penalty.dto");
const update_penaly_dto_1 = require("./dto/update-penaly.dto");
const register_penalty_dto_1 = require("./dto/register-penalty.dto");
const reverse_penalty_dto_1 = require("./dto/reverse-penalty.dto");
let ComerPenaltyController = class ComerPenaltyController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    async registerPenalty(data) {
        return await this.service.registerPenalty(data);
    }
    async updatePenalty(data) {
        return await this.service.updatePenalty(data);
    }
    async releasePenalty(data) {
        return await this.service.releasePenalty(data);
    }
    async getFinalDate(data) {
        return await this.service.getFinalDate(data);
    }
    async penaltyReverse(data) {
        return await this.service.penaltyReverse(data);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'registerPenalty' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_penalty_dto_1.RegisterPenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "registerPenalty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updatePenalty' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_penaly_dto_1.UpdatePenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "updatePenalty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'releasePenalty' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [release_penalty_dto_1.ReleasePenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "releasePenalty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getFinalDate' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_final_date_dto_1.FinalDateDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "getFinalDate", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'penaltyReverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reverse_penalty_dto_1.ReversePenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "penaltyReverse", null);
ComerPenaltyController = __decorate([
    (0, common_1.Controller)('comer-penalty'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_penalty_service_1.ComerPenaltyService,
        winston_1.Logger])
], ComerPenaltyController);
exports.ComerPenaltyController = ComerPenaltyController;
//# sourceMappingURL=comer-penalty.controller.js.map