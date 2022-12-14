"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const delegation_controller_1 = require("./delegation.controller");
const delegation_service_1 = require("./delegation.service");
const delegation_entity_1 = require("./entity/delegation.entity");
let DelegationModule = class DelegationModule {
};
DelegationModule = __decorate([
    (0, common_1.Module)({
        controllers: [delegation_controller_1.DelegationController],
        providers: [delegation_service_1.DelegationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'delegation_served',
                help: 'delegation_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                delegation_entity_1.DelegationEntity
            ])
        ]
    })
], DelegationModule);
exports.DelegationModule = DelegationModule;
//# sourceMappingURL=delegation.module.js.map