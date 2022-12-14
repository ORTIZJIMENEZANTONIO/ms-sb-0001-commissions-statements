"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralStatusModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const general_status_entity_1 = require("./entities/general-status.entity");
const general_status_controller_1 = require("./general-status.controller");
const general_status_service_1 = require("./general-status.service");
let GeneralStatusModule = class GeneralStatusModule {
};
GeneralStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([general_status_entity_1.GeneralStatusEntity])],
        providers: [general_status_service_1.GeneralStatusService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'general_status_served',
                help: 'general_status_help'
            })
        ],
        controllers: [general_status_controller_1.GeneralStatusController]
    })
], GeneralStatusModule);
exports.GeneralStatusModule = GeneralStatusModule;
//# sourceMappingURL=general-status.module.js.map