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
exports.LawyerService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const laywer_entity_1 = require("./entities/laywer.entity");
let LawyerService = class LawyerService {
    constructor(lawyerRepository, logger, counter) {
        this.lawyerRepository = lawyerRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createLawyer(lawyerDto) {
        const lawyerCreated = await this.lawyerRepository.save(lawyerDto);
        return lawyerCreated;
    }
    async getAllLawyers({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.lawyerRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { idLawyer: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getLawyerById(id) {
        const lawyerFound = await this.lawyerRepository.findOne({ where: { idLawyer: id } });
        return lawyerFound;
    }
    async updateLawyer(id, lawyerDto) {
        const lawyerFound = await this.lawyerRepository.findOne({ where: { idLawyer: id } });
        if (lawyerFound) {
            this.lawyerRepository.merge(lawyerFound, lawyerDto);
            return await this.lawyerRepository.save(lawyerFound);
        }
        return false;
    }
    async deleteLawyer(id) {
        return await this.lawyerRepository.delete(id);
    }
};
LawyerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(laywer_entity_1.LawyerEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('lawyer_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], LawyerService);
exports.LawyerService = LawyerService;
//# sourceMappingURL=lawyer.service.js.map