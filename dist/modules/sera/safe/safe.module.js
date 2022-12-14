"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const safe_entity_1 = require("./entities/safe.entity");
const safe_service_1 = require("./safe.service");
const safe_controller_1 = require("./safe.controller");
let SafeModule = class SafeModule {
};
SafeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([safe_entity_1.SafeEntity])],
        providers: [safe_service_1.SafeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'safe_served',
                help: 'safe_help'
            })
        ],
        controllers: [safe_controller_1.SafeController]
    })
], SafeModule);
exports.SafeModule = SafeModule;
//# sourceMappingURL=safe.module.js.map