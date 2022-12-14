"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const norms_controller_1 = require("./norms.controller");
const norms_service_1 = require("./norms.service");
const norms_entity_1 = require("./entity/norms.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let NormsModule = class NormsModule {
};
NormsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([norms_entity_1.NormsEntity])],
        controllers: [norms_controller_1.NormsController],
        providers: [norms_service_1.NormsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'norms_served',
                help: 'norms_help'
            })
        ]
    })
], NormsModule);
exports.NormsModule = NormsModule;
//# sourceMappingURL=norms.module.js.map