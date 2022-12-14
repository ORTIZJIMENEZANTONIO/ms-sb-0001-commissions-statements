"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const departament_controller_1 = require("./departament.controller");
const departament_service_1 = require("./departament.service");
const departament_entity_1 = require("./entity/departament.entity");
let DepartamentModule = class DepartamentModule {
};
DepartamentModule = __decorate([
    (0, common_1.Module)({
        controllers: [departament_controller_1.DepartamentController],
        providers: [departament_service_1.DepartamentService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'departament_served',
                help: 'departament_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                departament_entity_1.DepartamentEntity
            ])
        ]
    })
], DepartamentModule);
exports.DepartamentModule = DepartamentModule;
//# sourceMappingURL=departament.module.js.map