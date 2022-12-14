"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const court_controller_1 = require("./court.controller");
const court_service_1 = require("./court.service");
const court_entity_1 = require("./entity/court.entity");
let CourtModule = class CourtModule {
};
CourtModule = __decorate([
    (0, common_1.Module)({
        controllers: [court_controller_1.CourtController],
        providers: [
            court_service_1.CourtService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'court_served',
                help: 'court_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                court_entity_1.CourtEntity
            ])
        ]
    })
], CourtModule);
exports.CourtModule = CourtModule;
//# sourceMappingURL=court.module.js.map