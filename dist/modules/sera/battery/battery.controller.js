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
exports.BatteryController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const battery_service_1 = require("./battery.service");
const battery_dto_1 = require("./dto/battery.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let BatteryController = class BatteryController {
    constructor(batteryService, logger) {
        this.batteryService = batteryService;
        this.logger = logger;
    }
    async createBattery(batteryDto) {
        const batteryCreated = await this.batteryService.createBattery(batteryDto);
        return batteryCreated
            ? batteryCreated
            : { statusCode: 503, message: "This Battery was not created", error: "Create Error" };
    }
    async getAllBatteries({ inicio, pageSize }) {
        return await this.batteryService.getAllBatteries({ inicio, pageSize });
    }
    async getBatteryById(id) {
        const batteryFound = await this.batteryService.getBatteryById(id);
        return batteryFound
            ? batteryFound
            : { statusCode: '404', message: 'Battery not found', error: "Not found" };
    }
    async updateBattery(data) {
        const batteryUpdated = await this.batteryService.updateBattery(data.idToUpdate, data);
        return batteryUpdated
            ? batteryUpdated
            : { statusCode: '404', message: 'Battery not found', error: "Not found" };
    }
    async deleteBattery(id) {
        const affected = await this.batteryService.deleteBattery(id);
        return !affected
            ? { statusCode: '404', message: 'Battery not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createBattery' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [battery_dto_1.BatteryDto]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "createBattery", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllBatteries' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "getAllBatteries", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getBatteryById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "getBatteryById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateBattery' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "updateBattery", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteBattery' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "deleteBattery", null);
BatteryController = __decorate([
    (0, common_1.Controller)('battery'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [battery_service_1.BatteryService,
        winston_1.Logger])
], BatteryController);
exports.BatteryController = BatteryController;
//# sourceMappingURL=battery.controller.js.map