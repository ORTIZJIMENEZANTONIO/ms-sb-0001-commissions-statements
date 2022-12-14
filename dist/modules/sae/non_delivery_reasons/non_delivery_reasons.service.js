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
exports.NonDeliveryReasonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const nondeliveryreasons_entity_1 = require("./entity/nondeliveryreasons.entity");
let NonDeliveryReasonsService = class NonDeliveryReasonsService {
    constructor(nonDeliveryReasonsEntity, logger, counter) {
        this.nonDeliveryReasonsEntity = nonDeliveryReasonsEntity;
        this.logger = logger;
        this.counter = counter;
    }
    async getAllNonDeliveryReasons({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.nonDeliveryReasonsEntity.findAndCount({ order: { id: "DESC" },
            take: pageSize || 10,
            skip: (inicio - 1) * pageSize || 0
        });
        return {
            data: result,
            count: total
        };
    }
    async createNonDeliveryReason(nonDeliveryReasonsDto) {
        return await this.nonDeliveryReasonsEntity.save(nonDeliveryReasonsDto);
    }
    async findNonDeliveryReason(id) {
        return await this.nonDeliveryReasonsEntity.findOne({ where: { id: id } });
    }
    async updateNonDeliveryReason(nonDeliveryReasonsDto) {
        const id = nonDeliveryReasonsDto.id;
        delete nonDeliveryReasonsDto.id;
        const data = await this.nonDeliveryReasonsEntity.findOne({ where: { id: id } });
        if (data) {
            this.nonDeliveryReasonsEntity.merge(data, nonDeliveryReasonsDto);
            return this.nonDeliveryReasonsEntity.save(data);
        }
        else {
            return false;
        }
    }
    async deleteNonDeliveryReason(id) {
        const data = await this.nonDeliveryReasonsEntity.findOne({ where: { id: id, status: 0 } });
        if (data) {
            const status = { status: 1 };
            this.nonDeliveryReasonsEntity.merge(data, status);
            return this.nonDeliveryReasonsEntity.save(data);
        }
        else {
            return false;
        }
    }
};
NonDeliveryReasonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nondeliveryreasons_entity_1.NonDeliveryReasonsEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('nondeliveryreasons_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], NonDeliveryReasonsService);
exports.NonDeliveryReasonsService = NonDeliveryReasonsService;
//# sourceMappingURL=non_delivery_reasons.service.js.map