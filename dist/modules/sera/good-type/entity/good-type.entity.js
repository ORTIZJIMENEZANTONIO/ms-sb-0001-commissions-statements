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
exports.GoodTypeEntity = void 0;
const typeorm_1 = require("typeorm");
let GoodTypeEntity = class GoodTypeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_tipo' }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 70 }),
    __metadata("design:type", String)
], GoodTypeEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_aseguramiento" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_aseguramiento", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_fraccion" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_fraccion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_prorroga" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_prorroga", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_declaracion" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_declaracion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_plazo1" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_plazo1", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_plazo2" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_plazo2", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tiempo_max_plazo3" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "tiempo_max_plazo3", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], GoodTypeEntity.prototype, "no_registro", void 0);
GoodTypeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_tipo_bien", { schema: "sera" })
], GoodTypeEntity);
exports.GoodTypeEntity = GoodTypeEntity;
//# sourceMappingURL=good-type.entity.js.map