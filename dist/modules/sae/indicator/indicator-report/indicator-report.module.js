"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const indicator_report_entity_1 = require("./entity/indicator-report.entity");
const indicator_report_controller_1 = require("./indicator-report.controller");
const indicator_report_service_1 = require("./indicator-report.service");
let IndicatorReportModule = class IndicatorReportModule {
};
IndicatorReportModule = __decorate([
    (0, common_1.Module)({
        controllers: [indicator_report_controller_1.IndicatorReportController],
        providers: [
            indicator_report_service_1.IndicatorReportService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'indicator_report_served',
                help: 'indicator_report_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                indicator_report_entity_1.IndicatorReportEntity
            ])
        ]
    })
], IndicatorReportModule);
exports.IndicatorReportModule = IndicatorReportModule;
//# sourceMappingURL=indicator-report.module.js.map