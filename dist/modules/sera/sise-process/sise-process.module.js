"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiseProcessModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const sise_process_entity_1 = require("./entities/sise-process.entity");
const sise_process_controller_1 = require("./sise-process.controller");
const sise_process_service_1 = require("./sise-process.service");
let SiseProcessModule = class SiseProcessModule {
};
SiseProcessModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sise_process_entity_1.SiseProcessEntity])],
        providers: [sise_process_service_1.SiseProcessService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'siseprocess_served',
                help: 'siseprocess_help'
            })
        ],
        controllers: [sise_process_controller_1.SiseProcessController]
    })
], SiseProcessModule);
exports.SiseProcessModule = SiseProcessModule;
//# sourceMappingURL=sise-process.module.js.map