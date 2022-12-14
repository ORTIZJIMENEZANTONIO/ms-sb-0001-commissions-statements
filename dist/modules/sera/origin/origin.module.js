"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const origin_service_1 = require("./origin.service");
const origin_controller_1 = require("./origin.controller");
const origin_entity_1 = require("./entities/origin.entity");
let OriginModule = class OriginModule {
};
OriginModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([origin_entity_1.OriginEntity])],
        providers: [origin_service_1.OriginService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'origin_served',
                help: 'origin_help'
            })
        ],
        controllers: [origin_controller_1.OriginController]
    })
], OriginModule);
exports.OriginModule = OriginModule;
//# sourceMappingURL=origin.module.js.map