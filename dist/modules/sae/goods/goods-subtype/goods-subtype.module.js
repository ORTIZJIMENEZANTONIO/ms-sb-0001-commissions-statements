"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsSubtypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const goods_subtype_entity_1 = require("./entity/goods-subtype.entity");
const goods_subtype_controller_1 = require("./goods-subtype.controller");
const goods_subtype_service_1 = require("./goods-subtype.service");
let GoodsSubtypeModule = class GoodsSubtypeModule {
};
GoodsSubtypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [goods_subtype_controller_1.GoodsSubTypeController],
        providers: [
            goods_subtype_service_1.GoodsSubtypeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'goods_subtype_served',
                help: 'goods_subtype_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                goods_subtype_entity_1.GoodsSubTypeEntity
            ])
        ]
    })
], GoodsSubtypeModule);
exports.GoodsSubtypeModule = GoodsSubtypeModule;
//# sourceMappingURL=goods-subtype.module.js.map