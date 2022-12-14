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
exports.SeriesController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const series_dto_1 = require("./dto/series.dto");
const series_service_1 = require("./series.service");
let SeriesController = class SeriesController {
    constructor(seriesService, logger) {
        this.seriesService = seriesService;
        this.logger = logger;
    }
    async createSeries(seriesDto) {
        const seriesCreated = await this.seriesService.createSeries(seriesDto);
        return seriesCreated
            ? seriesCreated
            : { statusCode: 503, message: "This Series was not created", error: "Create Error" };
    }
    async getAllSeries(pagination) {
        return await this.seriesService.getAllSeries(pagination);
    }
    async getSeriesById(code) {
        const seriesFound = await this.seriesService.getSerieByCode(code);
        return seriesFound
            ? seriesFound
            : { statusCode: '404', message: 'Series not found', error: "Not found" };
    }
    async updateSeries(data) {
        const seriesUpdated = await this.seriesService.updateSerie(data.codeToUpdate, data);
        return seriesUpdated
            ? seriesUpdated
            : { statusCode: '404', message: 'Series not found', error: "Not found" };
    }
    async deleteSeries(code) {
        const affected = await this.seriesService.deleteSeries(code);
        return !affected
            ? { statusCode: '404', message: 'Series not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSeries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [series_dto_1.SeriesDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "createSeries", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSeries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "getAllSeries", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSeriesById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "getSeriesById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSeries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "updateSeries", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSeries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "deleteSeries", null);
SeriesController = __decorate([
    (0, common_1.Controller)('series'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [series_service_1.SeriesService,
        winston_1.Logger])
], SeriesController);
exports.SeriesController = SeriesController;
//# sourceMappingURL=series.controller.js.map