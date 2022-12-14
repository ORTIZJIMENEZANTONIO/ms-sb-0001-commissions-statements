"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RackModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const rack_service_1 = require("./rack.service");
const rack_controller_1 = require("./rack.controller");
const rack_entity_1 = require("./entities/rack.entity");
let RackModule = class RackModule {
};
RackModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rack_entity_1.RackEntity])],
        providers: [rack_service_1.RackService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'rack_served',
                help: 'rack_help'
            })
        ],
        controllers: [rack_controller_1.RackController]
    })
], RackModule);
exports.RackModule = RackModule;
//# sourceMappingURL=rack.module.js.map