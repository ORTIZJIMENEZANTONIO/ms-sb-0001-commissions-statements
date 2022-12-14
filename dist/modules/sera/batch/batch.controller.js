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
exports.BatchController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const batch_service_1 = require("./batch.service");
const batch_dto_1 = require("./dto/batch.dto");
let BatchController = class BatchController {
    constructor(batchService) {
        this.batchService = batchService;
    }
    async getAllBatchs(pagination) {
        return await this.batchService.getAllBatch(pagination);
    }
    async getBatchById(id) {
        return await this.batchService.getBatchById(id);
    }
    async createBatch(batchDTO) {
        const task = await this.batchService.createBatch(batchDTO);
        return task ? task :
            { statusCode: 503, message: "This batch was not created", error: "Create Error" };
    }
    async updateBatch(batchDTO) {
        const task = await this.batchService.updateBatch(batchDTO.id, batchDTO);
        return task ? task : { statusCode: '404', message: 'Batch not found', error: "Not found" };
    }
    async deleteBatch(id_batch) {
        const { affected } = await this.batchService.deleteBatch(id_batch);
        return affected == 0
            ? { statusCode: '404', message: 'Batch not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllBatch' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getAllBatchs", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getBatchById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createBatch' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batch_dto_1.BatchDTO]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "createBatch", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateBatch' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batch_dto_1.BatchDTO]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "updateBatch", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteBatch' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "deleteBatch", null);
BatchController = __decorate([
    (0, common_1.Controller)('batch'),
    __metadata("design:paramtypes", [batch_service_1.BatchService])
], BatchController);
exports.BatchController = BatchController;
//# sourceMappingURL=batch.controller.js.map