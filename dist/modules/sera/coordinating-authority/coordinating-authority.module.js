"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatingAuthorityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const coordinating_authority_entity_1 = require("./entities/coordinating-authority.entity");
const coordinating_authority_controller_1 = require("./coordinating-authority.controller");
const coordinating_authority_service_1 = require("./coordinating-authority.service");
let CoordinatingAuthorityModule = class CoordinatingAuthorityModule {
};
CoordinatingAuthorityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([coordinating_authority_entity_1.CoordinatingAuthorityEntity])],
        providers: [coordinating_authority_service_1.CoordinatingAuthorityService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'coordinating_authority_served',
                help: 'coordinating_authority_help'
            })
        ],
        controllers: [coordinating_authority_controller_1.CoordinatingAuthorityController],
    })
], CoordinatingAuthorityModule);
exports.CoordinatingAuthorityModule = CoordinatingAuthorityModule;
//# sourceMappingURL=coordinating-authority.module.js.map