"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsConceptModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const payments_concept_entity_1 = require("./entity/payments-concept.entity");
const payments_concept_controller_1 = require("./payments-concept.controller");
const payments_concept_service_1 = require("./payments-concept.service");
let PaymentsConceptModule = class PaymentsConceptModule {
};
PaymentsConceptModule = __decorate([
    (0, common_1.Module)({
        controllers: [payments_concept_controller_1.PaymentsConceptController],
        providers: [
            payments_concept_service_1.PaymentsConceptService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'paymentsConcept_served',
                help: 'paymentsConcept_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                payments_concept_entity_1.PaymentsConceptEntity
            ])
        ]
    })
], PaymentsConceptModule);
exports.PaymentsConceptModule = PaymentsConceptModule;
//# sourceMappingURL=payments-concept.module.js.map