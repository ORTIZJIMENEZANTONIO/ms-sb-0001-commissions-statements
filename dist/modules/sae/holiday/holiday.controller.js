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
exports.HolidayController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const holiday_service_1 = require("./holiday.service");
const holiday_dto_1 = require("./dto/holiday.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let HolidayController = class HolidayController {
    constructor(holidayService, logger) {
        this.holidayService = holidayService;
        this.logger = logger;
    }
    async createHoliday(holidayDto) {
        const holidayCreated = await this.holidayService.createHoliday(holidayDto);
        return holidayCreated
            ? holidayCreated
            : { statusCode: 503, message: "This general holiday was not created", error: "Create Error" };
    }
    async getAllHolidays({ inicio, pageSize }) {
        return await this.holidayService.getAllHolidays({ inicio, pageSize });
    }
    async getHolidayById(id) {
        const holidayFound = await this.holidayService.getHolidayById(id);
        return holidayFound
            ? holidayFound
            : { statusCode: '404', message: 'Holiday not found', error: "Not found" };
    }
    async updateHoliday(data) {
        const holidayUpdated = await this.holidayService.updateHoliday(data.idToUpdate, data);
        return holidayUpdated
            ? holidayUpdated
            : { statusCode: '404', message: 'Holiday not found', error: "Not found" };
    }
    async deleteHoliday(id) {
        const affected = await this.holidayService.deleteHoliday(id);
        return !affected
            ? { statusCode: '404', message: 'Holiday not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createHoliday' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "createHoliday", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllHolidays' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "getAllHolidays", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getHolidayById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "getHolidayById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateHoliday' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "updateHoliday", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteHoliday' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "deleteHoliday", null);
HolidayController = __decorate([
    (0, common_1.Controller)('holiday'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService,
        winston_1.Logger])
], HolidayController);
exports.HolidayController = HolidayController;
//# sourceMappingURL=holiday.controller.js.map