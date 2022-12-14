"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumPhotographyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const medium_photography_entity_1 = require("./entity/medium-photography.entity");
const medium_photography_controller_1 = require("./medium-photography.controller");
const medium_photography_service_1 = require("./medium-photography.service");
let MediumPhotographyModule = class MediumPhotographyModule {
};
MediumPhotographyModule = __decorate([
    (0, common_1.Module)({
        controllers: [medium_photography_controller_1.MediumPhotographyController],
        providers: [medium_photography_service_1.MediumPhotographyService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'mediumPhotography_served',
                help: 'mediumPhotography_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                medium_photography_entity_1.MediumPhotographyEntity
            ])
        ]
    })
], MediumPhotographyModule);
exports.MediumPhotographyModule = MediumPhotographyModule;
//# sourceMappingURL=medium-photography.module.js.map