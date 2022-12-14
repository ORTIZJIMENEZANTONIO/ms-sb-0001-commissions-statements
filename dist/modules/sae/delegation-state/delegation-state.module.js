"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegationStateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const delegation_state_entity_1 = require("./entities/delegation-state.entity");
const delegation_state_service_1 = require("./delegation-state.service");
const delegation_state_controller_1 = require("./delegation-state.controller");
let DelegationStateModule = class DelegationStateModule {
};
DelegationStateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([delegation_state_entity_1.DelegationStateEntity])],
        providers: [delegation_state_service_1.DelegationStateService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'delegation_state_served',
                help: 'delegation_state_help'
            })
        ],
        controllers: [delegation_state_controller_1.DelegationStateController]
    })
], DelegationStateModule);
exports.DelegationStateModule = DelegationStateModule;
//# sourceMappingURL=delegation-state.module.js.map