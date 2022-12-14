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
exports.ClaimConclusionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const prom_client_1 = require("prom-client");
const typeorm_2 = require("typeorm");
const claim_conclusion_entity_1 = require("./entity/claim-conclusion.entity");
let ClaimConclusionService = class ClaimConclusionService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async getAllClaimConclusion({ inicio, pageSize }) {
        const [result, total] = await this.entity.findAndCount({
            order: { id: "ASC" },
            take: pageSize || 10,
            skip: (inicio - 1) * pageSize || 0
        });
        return {
            data: result,
            count: total
        };
    }
    async getClaimConclusionById(id) {
        return await this.entity.findOne({ where: { id: id } });
    }
    async createClaimConclusion(claimConclusionDTO) {
        return await this.entity.save(claimConclusionDTO);
    }
    async updateClaimConclusion(id, claimConclusionDTO) {
        const task = await this.entity.findOne({ where: { id: id } });
        if (task) {
            this.entity.merge(task, claimConclusionDTO);
            return this.entity.save(task);
        }
        return false;
    }
    async deleteClaimConclusion(id) {
        return await this.entity.delete(id);
    }
};
ClaimConclusionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(claim_conclusion_entity_1.ClaimConclusionEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('claimConclusion_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ClaimConclusionService);
exports.ClaimConclusionService = ClaimConclusionService;
//# sourceMappingURL=claim-conclusion.service.js.map