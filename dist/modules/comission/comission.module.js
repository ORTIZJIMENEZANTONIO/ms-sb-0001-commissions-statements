"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComissionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comission_service_1 = require("./comission.service");
const comission_controller_1 = require("./comission.controller");
const comer_comission_x_good_entity_1 = require("./entities/comer-comission-x-good.entity");
const comer_lot_entity_1 = require("./entities/comer-lot.entity");
const comer_payment_ref_entity_1 = require("./entities/comer-payment-ref.entity");
const comer_event_entity_1 = require("./entities/comer-event.entity");
let ComissionModule = class ComissionModule {
};
ComissionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                comer_comission_x_good_entity_1.ComerComissionxbGoodEntity,
                comer_lot_entity_1.ComerLotEntity,
                comer_payment_ref_entity_1.ComerPaymentRefEntity,
                comer_event_entity_1.ComerEventEntity
            ])],
        controllers: [comission_controller_1.ComissionController],
        providers: [
            comission_service_1.ComissionService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_comission_served",
                help: "comer_comission_help",
            }),
        ],
    })
], ComissionModule);
exports.ComissionModule = ComissionModule;
//# sourceMappingURL=comission.module.js.map