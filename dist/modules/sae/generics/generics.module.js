"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generics_controller_1 = require("./generics.controller");
const generics_service_1 = require("./generics.service");
const generics_entity_1 = require("./entity/generics.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let GenericsModule = class GenericsModule {
};
GenericsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([generics_entity_1.genericsEntity])],
        controllers: [generics_controller_1.GenericsController],
        providers: [generics_service_1.GenericsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'generics_served',
                help: 'generics_help'
            })
        ]
    })
], GenericsModule);
exports.GenericsModule = GenericsModule;
//# sourceMappingURL=generics.module.js.map