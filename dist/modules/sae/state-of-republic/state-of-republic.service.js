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
exports.StateOfRepublicService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const state_of_republic_entity_1 = require("./entities/state-of-republic.entity");
let StateOfRepublicService = class StateOfRepublicService {
    constructor(stateRepository, logger, counter) {
        this.stateRepository = stateRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createStateOfRepublic(stateOfRepublicDto) {
        return await this.stateRepository.save(stateOfRepublicDto);
    }
    ;
    async getAllStatesOfRepublic({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.stateRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { stateCode: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    ;
    async getStateOfRepublicByStateCode(stateCode) {
        const stateFound = await this.stateRepository.findOne({ where: { stateCode: stateCode } });
        return stateFound
            ? stateFound
            : false;
    }
    ;
    async updateStateOfRepublic(stateCode, stateOfRepublicDto) {
        const stateFound = await this.stateRepository.findOne({ where: { stateCode: stateCode } });
        if (stateFound) {
            this.stateRepository.merge(stateFound, stateOfRepublicDto);
            return await this.stateRepository.save(stateFound);
        }
        return false;
    }
    ;
    async deleteStateOfRepublic(stateCode) {
        return await this.stateRepository.delete(stateCode);
    }
    ;
};
StateOfRepublicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(state_of_republic_entity_1.StateOfRepublicEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('state_of_republic_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], StateOfRepublicService);
exports.StateOfRepublicService = StateOfRepublicService;
//# sourceMappingURL=state-of-republic.service.js.map