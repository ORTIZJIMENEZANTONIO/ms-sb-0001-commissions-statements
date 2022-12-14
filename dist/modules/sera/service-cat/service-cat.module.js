"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const service_cat_service_1 = require("./service-cat.service");
const service_cat_controller_1 = require("./service-cat.controller");
const service_cat_entity_1 = require("./entities/service-cat.entity");
let ServiceCatModule = class ServiceCatModule {
};
ServiceCatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([service_cat_entity_1.ServiceCatEntity])],
        providers: [service_cat_service_1.ServiceCatService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'service_cat_served',
                help: 'service_cat_help'
            })
        ],
        controllers: [service_cat_controller_1.ServiceCatController]
    })
], ServiceCatModule);
exports.ServiceCatModule = ServiceCatModule;
//# sourceMappingURL=service-cat.module.js.map