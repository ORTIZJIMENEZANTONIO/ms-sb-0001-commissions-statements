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
exports.IndicatorDeadlinesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const indicator_deadlines_dto_1 = require("./dto/indicator-deadlines.dto");
const indicator_deadlines_service_1 = require("./indicator-deadlines.service");
let IndicatorDeadlinesController = class IndicatorDeadlinesController {
    constructor(indicatorService, logger) {
        this.indicatorService = indicatorService;
        this.logger = logger;
    }
    async getAllIndicatorDeadliness(pagination) {
        return await this.indicatorService.getAllIndicatorDeadlines(pagination);
    }
    async getIndicatorDeadlineById(id) {
        return await this.indicatorService.getIndicatorDeadlineById(id);
    }
    async createIndicatorDeadlines(indicatorDeadlinesDTO) {
        const task = await this.indicatorService.createIndicatorDeadlines(indicatorDeadlinesDTO);
        return task ? task :
            { statusCode: 503, message: "This general indicator deadline was not created", error: "Create Error" };
    }
    async updateIndicatorDeadlines(indicatorDeadlinesDTO) {
        const task = await this.indicatorService.updateIndicatorDeadlines(indicatorDeadlinesDTO.id, indicatorDeadlinesDTO);
        return task ? task : { statusCode: '404', message: 'Indicator Deadline not found', error: "Not found" };
    }
    async deleteIndicatorDeadlines(id) {
        const { affected } = await this.indicatorService.deleteIndicatorDeadlines(id);
        return affected == 0
            ? { statusCode: '404', message: 'Indicator Deadline not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllIndicatorDeadlines' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "getAllIndicatorDeadliness", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getIndicatorDeadlineById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "getIndicatorDeadlineById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createIndicatorDeadlines' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_deadlines_dto_1.IndicatorDeadlinesDTO]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "createIndicatorDeadlines", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateIndicatorDeadlines' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_deadlines_dto_1.IndicatorDeadlinesDTO]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "updateIndicatorDeadlines", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteIndicatorDeadlines' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "deleteIndicatorDeadlines", null);
IndicatorDeadlinesController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('indicator-deadlines'),
    (0, swagger_1.ApiTags)('indicator-deadlines'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [indicator_deadlines_service_1.IndicatorDeadlinesService,
        common_1.Logger])
], IndicatorDeadlinesController);
exports.IndicatorDeadlinesController = IndicatorDeadlinesController;
//# sourceMappingURL=indicator-deadlines.controller.js.map