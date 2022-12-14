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
exports.DepartamentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const prom_client_1 = require("prom-client");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const typeorm_2 = require("typeorm");
const departament_entity_1 = require("./entity/departament.entity");
let DepartamentService = class DepartamentService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async getAllDepartament({ inicio, pageSize }) {
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
    async getDepartamentById(id) {
        return await this.entity.findOne({ where: { id: id } });
    }
    async createDepartament(departamentDTO) {
        return await this.entity.save(departamentDTO);
    }
    async updateDepartament(id, departamentDTO) {
        const task = await this.entity.findOne({ where: { id: id } });
        if (task) {
            this.entity.merge(task, departamentDTO);
            return this.entity.save(task);
        }
        return false;
    }
    async deleteDepartament(id) {
        return await this.entity.delete(id);
    }
};
DepartamentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departament_entity_1.DepartamentEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('departament_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], DepartamentService);
exports.DepartamentService = DepartamentService;
//# sourceMappingURL=departament.service.js.map