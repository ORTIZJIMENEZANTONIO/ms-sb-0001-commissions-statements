"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionClassificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("nestjs-prometheus");
const institution_classification_entity_1 = require("./entity/institution-classification.entity");
const institution_classification_controller_1 = require("./institution-classification.controller");
const institution_classification_service_1 = require("./institution-classification.service");
let InstitutionClassificationModule = class InstitutionClassificationModule {
};
InstitutionClassificationModule = __decorate([
    (0, common_1.Module)({
        controllers: [institution_classification_controller_1.InstitutionClassificationController],
        providers: [
            institution_classification_service_1.InstitutionClassificationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'institution_classification_served',
                help: 'institution_classification_help'
            })
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                institution_classification_entity_1.InstitutionClassificationEntity
            ])
        ]
    })
], InstitutionClassificationModule);
exports.InstitutionClassificationModule = InstitutionClassificationModule;
//# sourceMappingURL=institution-classification.module.js.map