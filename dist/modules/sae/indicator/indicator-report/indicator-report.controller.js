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
exports.IndicatorReportController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const indicator_report_dto_1 = require("./dto/indicator-report.dto");
const indicator_report_service_1 = require("./indicator-report.service");
let IndicatorReportController = class IndicatorReportController {
    constructor(indicatorService, logger) {
        this.indicatorService = indicatorService;
        this.logger = logger;
    }
    async getAllIndicatorReports(pagination) {
        return await this.indicatorService.getAllIndicatorReport(pagination);
    }
    async getIndicatorReportById(id) {
        return await this.indicatorService.getIndicatorReportById(id);
    }
    async createIndicatorReport(indicatorDeadlinesDTO) {
        const task = await this.indicatorService.createIndicatorReport(indicatorDeadlinesDTO);
        return task ? task :
            { statusCode: 503, message: "This indicator report was not created", error: "Create Error" };
    }
    async updateIndicatorReport(indicatorDeadlinesDTO) {
        const task = await this.indicatorService.updateIndicatorReport(indicatorDeadlinesDTO.id, indicatorDeadlinesDTO);
        return task ? task : { statusCode: '404', message: 'Indicator report not found', error: "Not found" };
    }
    async deleteIndicatorReport(id) {
        const { affected } = await this.indicatorService.deleteIndicatorReport(id);
        return affected == 0
            ? { statusCode: '404', message: 'Indicator Report not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllIndicatorReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "getAllIndicatorReports", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getIndicatorReportById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "getIndicatorReportById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createIndicatorReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_report_dto_1.IndicatorReportDTO]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "createIndicatorReport", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateIndicatorReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_report_dto_1.IndicatorReportDTO]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "updateIndicatorReport", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteIndicatorReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "deleteIndicatorReport", null);
IndicatorReportController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('indicator-report'),
    (0, swagger_1.ApiTags)('indicator-report'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [indicator_report_service_1.IndicatorReportService,
        common_1.Logger])
], IndicatorReportController);
exports.IndicatorReportController = IndicatorReportController;
//# sourceMappingURL=indicator-report.controller.js.map