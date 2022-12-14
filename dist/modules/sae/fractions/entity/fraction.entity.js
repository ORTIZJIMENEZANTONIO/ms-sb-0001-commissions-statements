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
exports.FractionEntity = void 0;
const typeorm_1 = require("typeorm");
let FractionEntity = class FractionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id_fraccion" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "codigo" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nivel", length: 30 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "descripcion", length: 2000 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_fraccion_padre" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_norma" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "normId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "unidad", length: 30 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_clasificacion_siab" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "clasificationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], FractionEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], FractionEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_tipo_relevante" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "relevantTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "codigo_erp_1", length: 30 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "codeErp1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "codigo_erp_2", length: 30 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "codeErp2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "codigo_erp_3", length: 30 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "codeErp3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cantidad_decimal", length: 1, default: () => "N", nullable: false, }),
    __metadata("design:type", String)
], FractionEntity.prototype, "decimalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "status", length: 20 }),
    __metadata("design:type", String)
], FractionEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "codigo_fraccion" }),
    __metadata("design:type", Number)
], FractionEntity.prototype, "fractionCode", void 0);
FractionEntity = __decorate([
    (0, typeorm_1.Entity)("cat_fracciones", { schema: "sae_nsbdb" })
], FractionEntity);
exports.FractionEntity = FractionEntity;
//# sourceMappingURL=fraction.entity.js.map