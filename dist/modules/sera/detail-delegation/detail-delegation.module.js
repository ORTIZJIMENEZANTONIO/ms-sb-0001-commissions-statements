"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailDelegationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const detail_delegation_controller_1 = require("./detail-delegation.controller");
const detail_delegation_service_1 = require("./detail-delegation.service");
const detail_delegation_entity_1 = require("./entity/detail-delegation.entity");
let DetailDelegationModule = class DetailDelegationModule {
};
DetailDelegationModule = __decorate([
    (0, common_1.Module)({
        controllers: [detail_delegation_controller_1.DetailDelegationController],
        providers: [detail_delegation_service_1.DetailDelegationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'detailDelegation_served',
                help: 'detailDelegation_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                detail_delegation_entity_1.DetailDelegationEntity
            ])
        ]
    })
], DetailDelegationModule);
exports.DetailDelegationModule = DetailDelegationModule;
//# sourceMappingURL=detail-delegation.module.js.map