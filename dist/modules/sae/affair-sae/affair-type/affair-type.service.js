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
exports.AffairTypeService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const affair_type_entity_1 = require("./entities/affair-type.entity");
let AffairTypeService = class AffairTypeService {
    constructor(affairTypeRepository, logger, counter) {
        this.affairTypeRepository = affairTypeRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createAffairType(affairTypeDto) {
        const affairTypeCreated = await this.affairTypeRepository.save(affairTypeDto);
        return affairTypeCreated;
    }
    async getAllAffairTypes({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.affairTypeRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { code: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getAffairTypeById(id) {
        return await this.affairTypeRepository.findOne({ where: { code: id } });
    }
    async updateAffairType(code, affairTypeDto) {
        const AffairFound = await this.affairTypeRepository.findOne({ where: { code: code } });
        if (AffairFound) {
            this.affairTypeRepository.merge(AffairFound, affairTypeDto);
            return await this.affairTypeRepository.save(AffairFound);
        }
        return false;
    }
    async deleteAffairType(code) {
        return await this.affairTypeRepository.delete(code);
    }
};
AffairTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(affair_type_entity_1.AffairTypeEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('affair_type_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], AffairTypeService);
exports.AffairTypeService = AffairTypeService;
//# sourceMappingURL=affair-type.service.js.map