"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinpubModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const minpub_entity_1 = require("./entity/minpub.entity");
const minpub_controller_1 = require("./minpub.controller");
const minpub_service_1 = require("./minpub.service");
let MinpubModule = class MinpubModule {
};
MinpubModule = __decorate([
    (0, common_1.Module)({
        controllers: [minpub_controller_1.MinpubController],
        providers: [minpub_service_1.MinpubService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'minpub_served',
                help: 'minpub_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                minpub_entity_1.MinpubEntity
            ])
        ]
    })
], MinpubModule);
exports.MinpubModule = MinpubModule;
//# sourceMappingURL=minpub.module.js.map