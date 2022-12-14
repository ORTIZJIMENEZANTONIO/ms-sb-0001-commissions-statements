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
exports.ScoreService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const score_entity_1 = require("./entities/score.entity");
let ScoreService = class ScoreService {
    constructor(scoreRepository, logger, counter) {
        this.scoreRepository = scoreRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createScore(scoreDto) {
        return await this.scoreRepository.save(scoreDto);
    }
    async getAllScores({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.scoreRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { code: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getScoreByCode(code) {
        return await this.scoreRepository.findOne({ where: { code: code } });
    }
    async updateScore(code, scoreDto) {
        const scoreFound = await this.scoreRepository.findOne({ where: { code: code } });
        if (scoreFound) {
            this.scoreRepository.merge(scoreFound, scoreDto);
            return await this.scoreRepository.save(scoreFound);
        }
        return false;
    }
    async deleteScore(code) {
        return await this.scoreRepository.delete(code);
    }
};
ScoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(score_entity_1.ScoreEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('score_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ScoreService);
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map