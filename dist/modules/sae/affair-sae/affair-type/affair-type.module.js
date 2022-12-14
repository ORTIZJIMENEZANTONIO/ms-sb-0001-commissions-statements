"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const affair_type_entity_1 = require("./entities/affair-type.entity");
const affair_type_service_1 = require("./affair-type.service");
const affair_type_controller_1 = require("./affair-type.controller");
let AffairTypeModule = class AffairTypeModule {
};
AffairTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([affair_type_entity_1.AffairTypeEntity])],
        providers: [affair_type_service_1.AffairTypeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'affair_type_served',
                help: 'affair_type_help'
            })
        ],
        controllers: [affair_type_controller_1.AffairTypeController]
    })
], AffairTypeModule);
exports.AffairTypeModule = AffairTypeModule;
//# sourceMappingURL=affair-type.module.js.map