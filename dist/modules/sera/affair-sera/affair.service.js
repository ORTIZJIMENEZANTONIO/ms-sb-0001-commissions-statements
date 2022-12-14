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
exports.AffairService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const affair_entity_1 = require("./entities/affair.entity");
let AffairService = class AffairService {
    constructor(affairRepository, logger, counter) {
        this.affairRepository = affairRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createAffair(affairDto) {
        const affairCreated = await this.affairRepository.save(affairDto);
        return affairCreated;
    }
    async getAllAffairs({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.affairRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { code: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getAffairById(id) {
        return await this.affairRepository.findOne({ where: { code: id } });
    }
    async updateAffair(id, affairDto) {
        const AffairFound = await this.affairRepository.findOne({ where: { code: id } });
        if (AffairFound) {
            this.affairRepository.merge(AffairFound, affairDto);
            return await this.affairRepository.save(AffairFound);
        }
        return false;
    }
    async deleteAffair(code) {
        return await this.affairRepository.delete(code);
    }
};
AffairService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(affair_entity_1.AffairEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('affair_sera_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], AffairService);
exports.AffairService = AffairService;
//# sourceMappingURL=affair.service.js.map