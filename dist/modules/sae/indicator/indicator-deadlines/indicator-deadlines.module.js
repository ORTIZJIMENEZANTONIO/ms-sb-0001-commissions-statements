"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorDeadlinesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const indicator_deadlines_entity_1 = require("./entity/indicator-deadlines.entity");
const indicator_deadlines_controller_1 = require("./indicator-deadlines.controller");
const indicator_deadlines_service_1 = require("./indicator-deadlines.service");
let IndicatorDeadlinesModule = class IndicatorDeadlinesModule {
};
IndicatorDeadlinesModule = __decorate([
    (0, common_1.Module)({
        controllers: [indicator_deadlines_controller_1.IndicatorDeadlinesController],
        providers: [
            indicator_deadlines_service_1.IndicatorDeadlinesService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'indicator_deadlines_served',
                help: 'indicator_deadlines_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                indicator_deadlines_entity_1.IndicatorDeadlinesEntity
            ])
        ]
    })
], IndicatorDeadlinesModule);
exports.IndicatorDeadlinesModule = IndicatorDeadlinesModule;
//# sourceMappingURL=indicator-deadlines.module.js.map