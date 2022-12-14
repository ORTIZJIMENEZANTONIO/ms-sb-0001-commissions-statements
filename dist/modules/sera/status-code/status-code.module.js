"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const status_code_entity_1 = require("./entity/status-code.entity");
const status_code_controller_1 = require("./status-code.controller");
const status_code_service_1 = require("./status-code.service");
let StatusCodeModule = class StatusCodeModule {
};
StatusCodeModule = __decorate([
    (0, common_1.Module)({
        controllers: [status_code_controller_1.StatusCodeController],
        providers: [
            status_code_service_1.StatusCodeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'statusCode_served',
                help: 'statusCode_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                status_code_entity_1.StatusCodeEntity
            ])
        ]
    })
], StatusCodeModule);
exports.StatusCodeModule = StatusCodeModule;
//# sourceMappingURL=status-code.module.js.map