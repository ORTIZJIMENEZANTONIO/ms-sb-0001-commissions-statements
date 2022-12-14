"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodSssubtypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const good_sssubtype_entity_1 = require("./entity/good-sssubtype.entity");
const good_sssubtype_controller_1 = require("./good-sssubtype.controller");
const good_sssubtype_service_1 = require("./good-sssubtype.service");
let GoodSssubtypeModule = class GoodSssubtypeModule {
};
GoodSssubtypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [good_sssubtype_controller_1.GoodSssubtypeController],
        providers: [good_sssubtype_service_1.GoodSssubtypeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'goodSssubtype_served',
                help: 'goodSssubtype_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                good_sssubtype_entity_1.GoodSssubtypeEntity
            ])
        ]
    })
], GoodSssubtypeModule);
exports.GoodSssubtypeModule = GoodSssubtypeModule;
//# sourceMappingURL=good-sssubtype.module.js.map