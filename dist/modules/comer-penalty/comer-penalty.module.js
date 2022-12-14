"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerPenaltyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_penalty_controller_1 = require("./comer-penalty.controller");
const comer_penalty_service_1 = require("./comer-penalty.service");
const comer_client_entity_1 = require("./entities/comer-client.entity");
const comer_event_entity_1 = require("./entities/comer-event.entity");
const comer_lot_entity_1 = require("./entities/comer-lot.entity");
const comer_penalty_his_entity_1 = require("./entities/comer-penalty-his.entity");
const comer_penalty_entity_1 = require("./entities/comer-penalty.entity");
const comer_tpenalty_entity_1 = require("./entities/comer-tpenalty.entity");
let ComerPenaltyModule = class ComerPenaltyModule {
};
ComerPenaltyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                comer_tpenalty_entity_1.ComerTPenaltyEntity,
                comer_client_entity_1.ComerClientEntity,
                comer_penalty_his_entity_1.ComerPenaltyHisEntity,
                comer_penalty_entity_1.ComerPenaltyEntity,
                comer_event_entity_1.ComerEventEntity,
                comer_lot_entity_1.ComerLotEntity
            ]),
        ],
        controllers: [comer_penalty_controller_1.ComerPenaltyController],
        providers: [
            comer_penalty_service_1.ComerPenaltyService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'comer_penalty_served',
                help: 'comer_penalty_help',
            }),
        ],
    })
], ComerPenaltyModule);
exports.ComerPenaltyModule = ComerPenaltyModule;
//# sourceMappingURL=comer-penalty.module.js.map