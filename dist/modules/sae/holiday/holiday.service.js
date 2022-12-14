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
exports.HolidayService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const holiday_entity_1 = require("./entities/holiday.entity");
let HolidayService = class HolidayService {
    constructor(holidayRepository, logger, counter) {
        this.holidayRepository = holidayRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createHoliday(holidayDto) {
        const holidayCreated = await this.holidayRepository.save(holidayDto);
        return holidayCreated;
    }
    async getAllHolidays({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.holidayRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { id: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getHolidayById(id) {
        const holidayFound = await this.holidayRepository.findOne({ where: { id: id } });
        return holidayFound;
    }
    async updateHoliday(id, holidayDto) {
        const holidayFound = await this.holidayRepository.findOne({ where: { id: id } });
        if (holidayFound) {
            this.holidayRepository.merge(holidayFound, holidayDto);
            return await this.holidayRepository.save(holidayFound);
        }
        return false;
    }
    async deleteHoliday(id) {
        const data = await this.holidayRepository.findOne({ where: { id: id, status: 0 } });
        if (data) {
            const status = { status: 1 };
            this.holidayRepository.merge(data, status);
            return this.holidayRepository.save(data);
        }
        return false;
    }
};
HolidayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(holiday_entity_1.HolidayEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('holiday_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], HolidayService);
exports.HolidayService = HolidayService;
//# sourceMappingURL=holiday.service.js.map