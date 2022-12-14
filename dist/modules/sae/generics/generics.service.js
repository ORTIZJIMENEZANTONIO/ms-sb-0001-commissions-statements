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
exports.GenericsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const generics_entity_1 = require("./entity/generics.entity");
let GenericsService = class GenericsService {
    constructor(generics, logger, counter) {
        this.generics = generics;
        this.logger = logger;
        this.counter = counter;
    }
    async getAllGenerics({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.generics.findAndCount({ order: { name: "DESC" },
            take: pageSize || 10,
            skip: (inicio - 1) * pageSize || 0
        });
        return {
            data: result,
            count: total
        };
    }
    async createGeneric(genericDto) {
        return await this.generics.save(genericDto);
    }
    async findGeneric(name) {
        return await this.generics.findOne({ where: { name: name } });
    }
    async updateGeneric(GenericsDto) {
        const name = GenericsDto.name;
        const data = await this.generics.findOne({ where: { name: name } });
        if (data) {
            this.generics.merge(data, GenericsDto.genericDto);
            return this.generics.save(data);
        }
        else {
            return false;
        }
    }
    async deleteGeneric(name) {
        const data = await this.generics.findOne({ where: { name: name, active: "0" } });
        if (data) {
            const active = { active: "1" };
            this.generics.merge(data, active);
            return this.generics.save(data);
        }
        else {
            return false;
        }
    }
};
GenericsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(generics_entity_1.genericsEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('generics_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], GenericsService);
exports.GenericsService = GenericsService;
//# sourceMappingURL=generics.service.js.map