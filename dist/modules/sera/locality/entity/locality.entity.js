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
exports.LocalityEntity = void 0;
const typeorm_1 = require("typeorm");
let LocalityEntity = class LocalityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'codigo_localidad' }),
    __metadata("design:type", Number)
], LocalityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 100 }),
    __metadata("design:type", String)
], LocalityEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "codigo_municipio" }),
    __metadata("design:type", Number)
], LocalityEntity.prototype, "codigo_municipio", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cod_entfed", length: 15 }),
    __metadata("design:type", String)
], LocalityEntity.prototype, "cod_entfed", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_delegacion" }),
    __metadata("design:type", Number)
], LocalityEntity.prototype, "no_delegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], LocalityEntity.prototype, "no_registro", void 0);
LocalityEntity = __decorate([
    (0, typeorm_1.Entity)("cat_localidades", { schema: "sera" })
], LocalityEntity);
exports.LocalityEntity = LocalityEntity;
//# sourceMappingURL=locality.entity.js.map