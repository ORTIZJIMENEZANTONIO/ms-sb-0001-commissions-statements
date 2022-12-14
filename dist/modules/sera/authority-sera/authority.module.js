"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const authority_entity_1 = require("./entities/authority.entity");
const authority_service_1 = require("./authority.service");
const authority_controller_1 = require("./authority.controller");
let AuthorityModule = class AuthorityModule {
};
AuthorityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([authority_entity_1.AuthorityEntity])],
        providers: [authority_service_1.AuthorityService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'authority_sera_served',
                help: 'authority_sera_help'
            })
        ],
        controllers: [authority_controller_1.AuthorityController]
    })
], AuthorityModule);
exports.AuthorityModule = AuthorityModule;
//# sourceMappingURL=authority.module.js.map