"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusProcessModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const status_process_controller_1 = require("./status_process.controller");
const status_process_service_1 = require("./status_process.service");
const statusprocess_entity_1 = require("./entity/statusprocess.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let StatusProcessModule = class StatusProcessModule {
};
StatusProcessModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([statusprocess_entity_1.StatusProcessEntity])],
        controllers: [status_process_controller_1.StatusProcessController],
        providers: [
            status_process_service_1.StatusProcessService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'status_process_served',
                help: 'status_process_help'
            })
        ],
    })
], StatusProcessModule);
exports.StatusProcessModule = StatusProcessModule;
//# sourceMappingURL=status_process.module.js.map