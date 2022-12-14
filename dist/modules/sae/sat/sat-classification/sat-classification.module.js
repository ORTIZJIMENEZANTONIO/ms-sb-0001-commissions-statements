"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatClassificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const sat_classification_entity_1 = require("./entity/sat-classification.entity");
const sat_classification_controller_1 = require("./sat-classification.controller");
const sat_classification_service_1 = require("./sat-classification.service");
let SatClassificationModule = class SatClassificationModule {
};
SatClassificationModule = __decorate([
    (0, common_1.Module)({
        controllers: [sat_classification_controller_1.SatClassificationController],
        providers: [
            sat_classification_service_1.SatClassificationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'sat_classification_served',
                help: 'sat_classification_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                sat_classification_entity_1.SatClassificationEntity
            ])
        ]
    })
], SatClassificationModule);
exports.SatClassificationModule = SatClassificationModule;
//# sourceMappingURL=sat-classification.module.js.map