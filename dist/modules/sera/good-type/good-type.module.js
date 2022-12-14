"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const good_type_entity_1 = require("./entity/good-type.entity");
const good_type_controller_1 = require("./good-type.controller");
const good_type_service_1 = require("./good-type.service");
let GoodTypeModule = class GoodTypeModule {
};
GoodTypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [good_type_controller_1.GoodTypeController],
        providers: [good_type_service_1.GoodTypeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'goodType_served',
                help: 'goodType_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                good_type_entity_1.GoodTypeEntity
            ])
        ]
    })
], GoodTypeModule);
exports.GoodTypeModule = GoodTypeModule;
//# sourceMappingURL=good-type.module.js.map