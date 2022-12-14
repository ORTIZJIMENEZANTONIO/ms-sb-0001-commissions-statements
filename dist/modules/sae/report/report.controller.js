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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const report_dto_1 = require("./dto/report.dto");
const report_service_1 = require("./report.service");
let ReportController = class ReportController {
    constructor(reportService, logger) {
        this.reportService = reportService;
        this.logger = logger;
    }
    async getAllReports(pagination) {
        return await this.reportService.getAllReport(pagination);
    }
    async getReportById(id) {
        return await this.reportService.getReportById(id);
    }
    async createReport(reportDTO) {
        const task = await this.reportService.createReport(reportDTO);
        return task ? task :
            { statusCode: 503, message: "This report was not created", error: "Create Error" };
    }
    async updateReport(reportDTO) {
        const task = await this.reportService.updateReport(reportDTO.id, reportDTO);
        return task ? task : { statusCode: '404', message: 'Report not found', error: "Not found" };
    }
    async deleteReport(id) {
        const { affected } = await this.reportService.deleteReport(id);
        return affected == 0
            ? { statusCode: '404', message: 'Report not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "getAllReports", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getReportById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "getReportById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDTO]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "createReport", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDTO]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "updateReport", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteReport' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "deleteReport", null);
ReportController = __decorate([
    (0, common_1.Controller)('report'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [report_service_1.ReportService,
        common_1.Logger])
], ReportController);
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map