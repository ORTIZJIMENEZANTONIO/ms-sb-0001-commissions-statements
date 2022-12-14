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
exports.ServiceCatService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const service_cat_entity_1 = require("./entities/service-cat.entity");
let ServiceCatService = class ServiceCatService {
    constructor(serviceRepository, logger, counter) {
        this.serviceRepository = serviceRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createService(serviceCatDto) {
        return await this.serviceRepository.save(serviceCatDto);
    }
    async getAllServices({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.serviceRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { code: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getServiceByCode(code) {
        return await this.serviceRepository.findOne({ where: { code: code } });
    }
    async updateService(code, serviceCatDto) {
        const serviceFound = await this.serviceRepository.findOne({ where: { code: code } });
        if (serviceFound) {
            this.serviceRepository.merge(serviceFound, serviceCatDto);
            return await this.serviceRepository.save(serviceFound);
        }
        return false;
    }
    async deleteService(code) {
        return await this.serviceRepository.delete(code);
    }
};
ServiceCatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_cat_entity_1.ServiceCatEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('service_cat_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ServiceCatService);
exports.ServiceCatService = ServiceCatService;
//# sourceMappingURL=service-cat.service.js.map