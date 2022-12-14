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
exports.AuthorityService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const authority_entity_1 = require("./entities/authority.entity");
let AuthorityService = class AuthorityService {
    constructor(authorityRepository, logger, counter) {
        this.authorityRepository = authorityRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createAuthority(authorityDto) {
        const authorityCreated = await this.authorityRepository.save(authorityDto);
        return authorityCreated;
    }
    async getAllAuthorities({ inicio, pageSize }) {
        this.counter.inc();
        const [result, total] = await this.authorityRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { idTransferer: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getAuthorityById(id) {
        return await this.authorityRepository.findOne({ where: { idTransferer: id } });
    }
    async updateAuthority(code, authorityDto) {
        const authorityFound = await this.authorityRepository.findOne({ where: { idTransferer: code } });
        if (authorityFound) {
            this.authorityRepository.merge(authorityFound, authorityDto);
            return await this.authorityRepository.save(authorityFound);
        }
        return false;
    }
    async deleteAuthority(code) {
        return await this.authorityRepository.delete(code);
    }
};
AuthorityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(authority_entity_1.AuthorityEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('authority_sera_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], AuthorityService);
exports.AuthorityService = AuthorityService;
//# sourceMappingURL=authority.service.js.map