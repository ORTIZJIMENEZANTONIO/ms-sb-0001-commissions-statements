"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatParagraphsEntity = void 0;
const typeorm_1 = require("typeorm");
let CatParagraphsEntity = class CatParagraphsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id_parrafo" }),
    __metadata("design:type", Number)
], CatParagraphsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], CatParagraphsEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], CatParagraphsEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], CatParagraphsEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], CatParagraphsEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], CatParagraphsEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "parrafo", length: 4000 }),
    __metadata("design:type", String)
], CatParagraphsEntity.prototype, "paragraph", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombre_reporte", length: 200 }),
    __metadata("design:type", String)
], CatParagraphsEntity.prototype, "reportName", void 0);
CatParagraphsEntity = __decorate([
    (0, typeorm_1.Entity)("cat_parrafos", { schema: "sae_nsbdb" })
], CatParagraphsEntity);
exports.CatParagraphsEntity = CatParagraphsEntity;
//# sourceMappingURL=catparagraphs.entity.js.map