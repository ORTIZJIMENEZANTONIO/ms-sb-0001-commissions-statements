"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProficientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const proficient_entity_1 = require("./entity/proficient.entity");
const proficient_controller_1 = require("./proficient.controller");
const proficient_service_1 = require("./proficient.service");
let ProficientModule = class ProficientModule {
};
ProficientModule = __decorate([
    (0, common_1.Module)({
        controllers: [proficient_controller_1.ProficientController],
        providers: [proficient_service_1.ProficientService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'proficient_served',
                help: 'proficient_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                proficient_entity_1.ProficientEntity
            ])
        ]
    })
], ProficientModule);
exports.ProficientModule = ProficientModule;
//# sourceMappingURL=proficient.module.js.map