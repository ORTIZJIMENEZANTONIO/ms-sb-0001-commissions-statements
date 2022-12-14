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
exports.NormsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const norms_entity_1 = require("./entity/norms.entity");
let NormsService = class NormsService {
    constructor(normsEntity, logger, counter) {
        this.normsEntity = normsEntity;
        this.logger = logger;
        this.counter = counter;
    }
    async getAllNorms({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.normsEntity.findAndCount({ order: { id: "DESC" },
            take: pageSize || 10,
            skip: (inicio - 1) * pageSize || 0
        });
        return {
            data: result,
            count: total
        };
    }
    async createNorm(normsDto) {
        return await this.normsEntity.save(normsDto);
    }
    async findNorm(id) {
        return await this.normsEntity.findOne({ where: { id: id } });
    }
    async updateNorm(normsDto) {
        const id = normsDto.id;
        delete normsDto.id;
        const data = await this.normsEntity.findOne({ where: { id: id } });
        if (data) {
            this.normsEntity.merge(data, normsDto);
            return this.normsEntity.save(data);
        }
        else {
            return false;
        }
    }
    async deleteNorm(id) {
        return await this.normsEntity.delete(id);
    }
};
NormsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(norms_entity_1.NormsEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('norms_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], NormsService);
exports.NormsService = NormsService;
//# sourceMappingURL=norms.service.js.map