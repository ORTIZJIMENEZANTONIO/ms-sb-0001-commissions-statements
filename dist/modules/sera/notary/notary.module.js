"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const notary_entity_1 = require("./entity/notary.entity");
const notary_controller_1 = require("./notary.controller");
const notary_service_1 = require("./notary.service");
let NotaryModule = class NotaryModule {
};
NotaryModule = __decorate([
    (0, common_1.Module)({
        controllers: [notary_controller_1.NotaryController],
        providers: [notary_service_1.NotaryService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'notary_served',
                help: 'notary_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                notary_entity_1.NotaryEntity
            ])
        ]
    })
], NotaryModule);
exports.NotaryModule = NotaryModule;
//# sourceMappingURL=notary.module.js.map