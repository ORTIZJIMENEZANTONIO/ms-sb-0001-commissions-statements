"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficialLegendsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const official_legends_controller_1 = require("./official_legends.controller");
const official_legends_service_1 = require("./official_legends.service");
const official_legends_entity_1 = require("./entity/official_legends.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let OfficialLegendsModule = class OfficialLegendsModule {
};
OfficialLegendsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([official_legends_entity_1.OfficialLegendsEntity])],
        controllers: [official_legends_controller_1.OfficialLegendsController],
        providers: [official_legends_service_1.OfficialLegendsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'official_legends_served',
                help: 'official_legends_help'
            })
        ]
    })
], OfficialLegendsModule);
exports.OfficialLegendsModule = OfficialLegendsModule;
//# sourceMappingURL=official_legends.module.js.map