"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorehouseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const storehouse_entity_1 = require("./entities/storehouse.entity");
const storehouse_service_1 = require("./storehouse.service");
const storehouse_controller_1 = require("./storehouse.controller");
let StorehouseModule = class StorehouseModule {
};
StorehouseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([storehouse_entity_1.StorehouseEntity])],
        providers: [storehouse_service_1.StorehouseService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'storehouse_served',
                help: 'storehouse_help'
            })
        ],
        controllers: [storehouse_controller_1.StorehouseController]
    })
], StorehouseModule);
exports.StorehouseModule = StorehouseModule;
//# sourceMappingURL=storehouse.module.js.map