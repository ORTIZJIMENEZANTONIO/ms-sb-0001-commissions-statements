"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonDeliveryReasonsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const non_delivery_reasons_controller_1 = require("./non_delivery_reasons.controller");
const non_delivery_reasons_service_1 = require("./non_delivery_reasons.service");
const nondeliveryreasons_entity_1 = require("./entity/nondeliveryreasons.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let NonDeliveryReasonsModule = class NonDeliveryReasonsModule {
};
NonDeliveryReasonsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nondeliveryreasons_entity_1.NonDeliveryReasonsEntity])],
        controllers: [non_delivery_reasons_controller_1.NonDeliveryReasonsController],
        providers: [non_delivery_reasons_service_1.NonDeliveryReasonsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'nondeliveryreasons_served',
                help: 'nondeliveryreasons_help'
            })
        ]
    })
], NonDeliveryReasonsModule);
exports.NonDeliveryReasonsModule = NonDeliveryReasonsModule;
//# sourceMappingURL=non_delivery_reasons.module.js.map