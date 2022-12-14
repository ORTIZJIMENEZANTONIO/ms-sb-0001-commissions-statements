"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionalDelegationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const regional_delegation_entity_1 = require("./entities/regional-delegation.entity");
const regional_delegation_service_1 = require("./regional-delegation.service");
const regional_delegation_controller_1 = require("./regional-delegation.controller");
let RegionalDelegationModule = class RegionalDelegationModule {
};
RegionalDelegationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([regional_delegation_entity_1.RegionalDelegationEntity])],
        providers: [regional_delegation_service_1.RegionalDelegationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'regional_delegation_served',
                help: 'regional_delegation_help'
            })
        ],
        controllers: [regional_delegation_controller_1.RegionalDelegationController]
    })
], RegionalDelegationModule);
exports.RegionalDelegationModule = RegionalDelegationModule;
//# sourceMappingURL=regional-delegation.module.js.map