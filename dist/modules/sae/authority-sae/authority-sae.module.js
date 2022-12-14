"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthoritySaeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const authority_sae_service_1 = require("./authority-sae.service");
const authority_sae_controller_1 = require("./authority-sae.controller");
const authority_sae_entity_1 = require("./entities/authority-sae.entity");
let AuthoritySaeModule = class AuthoritySaeModule {
};
AuthoritySaeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([authority_sae_entity_1.AuthoritySaeEntity])],
        providers: [authority_sae_service_1.AuthoritySaeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'authority_sae_served',
                help: 'authority_sae_help'
            })
        ],
        controllers: [authority_sae_controller_1.AuthoritySaeController]
    })
], AuthoritySaeModule);
exports.AuthoritySaeModule = AuthoritySaeModule;
//# sourceMappingURL=authority-sae.module.js.map