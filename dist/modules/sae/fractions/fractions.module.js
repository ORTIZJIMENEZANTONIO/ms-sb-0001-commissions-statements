"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fractions_controller_1 = require("./fractions.controller");
const fractions_service_1 = require("./fractions.service");
const fraction_entity_1 = require("./entity/fraction.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let FractionsModule = class FractionsModule {
};
FractionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fraction_entity_1.FractionEntity])],
        controllers: [fractions_controller_1.FractionsController],
        providers: [fractions_service_1.FractionsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'fractions_served',
                help: 'fractions_help'
            })
        ]
    })
], FractionsModule);
exports.FractionsModule = FractionsModule;
//# sourceMappingURL=fractions.module.js.map