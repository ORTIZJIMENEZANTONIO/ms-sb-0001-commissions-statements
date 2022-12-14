"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const locality_entity_1 = require("./entity/locality.entity");
const locality_controller_1 = require("./locality.controller");
const locality_service_1 = require("./locality.service");
let LocalityModule = class LocalityModule {
};
LocalityModule = __decorate([
    (0, common_1.Module)({
        controllers: [locality_controller_1.LocalityController],
        providers: [locality_service_1.LocalityService, (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'locality_served',
                help: 'locality_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                locality_entity_1.LocalityEntity
            ])
        ]
    })
], LocalityModule);
exports.LocalityModule = LocalityModule;
//# sourceMappingURL=locality.module.js.map