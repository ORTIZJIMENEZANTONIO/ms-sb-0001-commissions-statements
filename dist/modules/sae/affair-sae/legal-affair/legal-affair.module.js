"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalAffairModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const legal_affair_entity_1 = require("./entities/legal-affair.entity");
const legal_affair_controller_1 = require("./legal-affair.controller");
const legal_affair_service_1 = require("./legal-affair.service");
let LegalAffairModule = class LegalAffairModule {
};
LegalAffairModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([legal_affair_entity_1.LegalAffairEntity])],
        providers: [legal_affair_service_1.LegalAffairService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'legal_affair_served',
                help: 'legal_affair_help'
            })
        ],
        controllers: [legal_affair_controller_1.LegalAffairController]
    })
], LegalAffairModule);
exports.LegalAffairModule = LegalAffairModule;
//# sourceMappingURL=legal-affair.module.js.map