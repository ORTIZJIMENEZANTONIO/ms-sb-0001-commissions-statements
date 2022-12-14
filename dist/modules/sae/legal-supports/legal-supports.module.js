"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalSupportsModule = void 0;
const common_1 = require("@nestjs/common");
const legal_supports_service_1 = require("./legal-supports.service");
const legal_supports_controller_1 = require("./legal-supports.controller");
const typeorm_1 = require("@nestjs/typeorm");
const legal_supports_entity_1 = require("./entity/legal-supports.entity");
const nestjs_prometheus_1 = require("nestjs-prometheus");
let LegalSupportsModule = class LegalSupportsModule {
};
LegalSupportsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            legal_supports_service_1.LegalSupportsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'legal_supports_served',
                help: 'legal_supports_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                legal_supports_entity_1.LegalSupportsEntity
            ])
        ],
        controllers: [legal_supports_controller_1.LegalSupportsController]
    })
], LegalSupportsModule);
exports.LegalSupportsModule = LegalSupportsModule;
//# sourceMappingURL=legal-supports.module.js.map