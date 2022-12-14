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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const bank_entity_1 = require("./entities/bank.entity");
let BankService = class BankService {
    constructor(bankRepository, logger, counter) {
        this.bankRepository = bankRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createBank(bankDto) {
        const bankCreated = await this.bankRepository.save(bankDto);
        return bankCreated;
    }
    async getAllBanks({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.bankRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { bankCode: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getBankByCode(code) {
        return await this.bankRepository.findOne({ where: { bankCode: code } });
    }
    async updateBank(code, bankDto) {
        const bankFound = await this.bankRepository.findOne({ where: { bankCode: code } });
        if (bankFound) {
            this.bankRepository.merge(bankFound, bankDto);
            return await this.bankRepository.save(bankFound);
        }
        return false;
    }
    async deleteBank(code) {
        return await this.bankRepository.delete(code);
    }
};
BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bank_entity_1.BankEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('bank_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map