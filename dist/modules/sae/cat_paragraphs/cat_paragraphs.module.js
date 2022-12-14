"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatParagraphsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cat_paragraphs_controller_1 = require("./cat_paragraphs.controller");
const cat_paragraphs_service_1 = require("./cat_paragraphs.service");
const catparagraphs_entity_1 = require("./entity/catparagraphs.entity");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
let CatParagraphsModule = class CatParagraphsModule {
};
CatParagraphsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([catparagraphs_entity_1.CatParagraphsEntity])],
        controllers: [cat_paragraphs_controller_1.CatParagraphsController],
        providers: [cat_paragraphs_service_1.CatParagraphsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'catparagraphs_served',
                help: 'catparagraphs_help'
            })
        ]
    })
], CatParagraphsModule);
exports.CatParagraphsModule = CatParagraphsModule;
//# sourceMappingURL=cat_paragraphs.module.js.map