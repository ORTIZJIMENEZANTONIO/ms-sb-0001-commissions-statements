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
exports.PenaltyController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const penalty_dto_1 = require("./dto/penalty.dto");
const penalty_service_1 = require("./penalty.service");
let PenaltyController = class PenaltyController {
    constructor(penaltyService) {
        this.penaltyService = penaltyService;
    }
    async getAllPenaltys(pagination) {
        return await this.penaltyService.getAllPenalty(pagination);
    }
    async getPenaltyById(id) {
        return await this.penaltyService.getPenaltyById(id);
    }
    async createPenalty(penaltyDTO) {
        const task = await this.penaltyService.createPenalty(penaltyDTO);
        return task ? task :
            { statusCode: 503, message: "This penalty was not created", error: "Create Error" };
    }
    async updatePenalty(penaltyDTO) {
        const task = await this.penaltyService.updatePenalty(penaltyDTO.id, penaltyDTO);
        return task ? task : { statusCode: '404', message: 'Legal Supports found', error: "Not found" };
    }
    async deletePenalty(id_penalty) {
        const { affected } = await this.penaltyService.deletePenalty(id_penalty);
        return affected == 0
            ? { statusCode: '404', message: 'Penalty not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllPenalty' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "getAllPenaltys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getPenaltyById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "getPenaltyById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createPenalty' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [penalty_dto_1.PenaltyDTO]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "createPenalty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updatePenalty' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [penalty_dto_1.PenaltyDTO]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "updatePenalty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deletePenalty' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "deletePenalty", null);
PenaltyController = __decorate([
    (0, common_1.Controller)('penalty'),
    __metadata("design:paramtypes", [penalty_service_1.PenaltyService])
], PenaltyController);
exports.PenaltyController = PenaltyController;
//# sourceMappingURL=penalty.controller.js.map