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
exports.FractionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const fraction_entity_1 = require("./entity/fraction.entity");
let FractionsService = class FractionsService {
    constructor(fraction, logger, counter) {
        this.fraction = fraction;
        this.logger = logger;
        this.counter = counter;
    }
    async getAllFractions({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.fraction.findAndCount({ order: { id: "DESC" },
            take: pageSize || 10,
            skip: (inicio - 1) * pageSize || 0
        });
        return {
            data: result,
            count: total
        };
    }
    async findFraction(id) {
        return await this.fraction.findOne({ where: { id: id } });
    }
    async createFraction(fractionsDto) {
        return await this.fraction.save(fractionsDto);
    }
    async updateFraction(FractionsDto) {
        const id = FractionsDto.id;
        delete FractionsDto.id;
        const data = await this.fraction.findOne({ where: { id: id } });
        if (data) {
            this.fraction.merge(data, FractionsDto);
            return this.fraction.save(data);
        }
        else {
            return false;
        }
    }
    async deleteFraction(id) {
        return await this.fraction.delete(id);
    }
};
FractionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fraction_entity_1.FractionEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('fractions_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], FractionsService);
exports.FractionsService = FractionsService;
//# sourceMappingURL=fractions.service.js.map