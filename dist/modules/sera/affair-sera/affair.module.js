"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const affair_entity_1 = require("./entities/affair.entity");
const affair_service_1 = require("./affair.service");
const affair_controller_1 = require("./affair.controller");
let AffairModule = class AffairModule {
};
AffairModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([affair_entity_1.AffairEntity])],
        providers: [affair_service_1.AffairService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'affair_sera_served',
                help: 'affair_sera_help'
            })
        ],
        controllers: [affair_controller_1.AffairController]
    })
], AffairModule);
exports.AffairModule = AffairModule;
//# sourceMappingURL=affair.module.js.map