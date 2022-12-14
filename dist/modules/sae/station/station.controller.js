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
exports.StationController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const station_service_1 = require("./station.service");
const station_dto_1 = require("./dto/station.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let StationController = class StationController {
    constructor(stationService, logger) {
        this.stationService = stationService;
        this.logger = logger;
    }
    createStation(stationDto) {
        const stationCreated = this.stationService.createStation(stationDto);
        return stationCreated
            ? stationCreated
            : { statusCode: 503, message: "This statio was not created", error: "Create Error" };
    }
    async getAllStations({ inicio, pageSize }) {
        return await this.stationService.getAllStations({ inicio, pageSize });
    }
    async getStationByCode(id) {
        const stationFound = await this.stationService.getStationById(id);
        return stationFound
            ? stationFound
            : { statusCode: '404', message: 'Station not found', error: "Not found" };
    }
    async updateStation(stationData) {
        const stationUpdated = await this.stationService.updateStation(stationData.stationIdToUpdate, stationData);
        return stationUpdated
            ? stationUpdated
            : { statusCode: '404', message: 'Station not found', error: "Not found" };
    }
    async deleteStation(id) {
        const affected = await this.stationService.deleteStation(id);
        return !affected
            ? { statusCode: '404', message: 'Station not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createStation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [station_dto_1.StationDto]),
    __metadata("design:returntype", void 0)
], StationController.prototype, "createStation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllStations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getAllStations", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getStationByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getStationByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateStation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "updateStation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteStation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "deleteStation", null);
StationController = __decorate([
    (0, common_1.Controller)('station-sae'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [station_service_1.StationService,
        winston_1.Logger])
], StationController);
exports.StationController = StationController;
//# sourceMappingURL=station.controller.js.map