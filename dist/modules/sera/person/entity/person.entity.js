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
exports.PersonEntity = void 0;
const typeorm_1 = require("typeorm");
let PersonEntity = class PersonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_persona' }),
    __metadata("design:type", Number)
], PersonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nom_persona', length: 30 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "nom_persona", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre', length: 200 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'calle', length: 200 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_exterior', length: 10 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "no_exterior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_interior', length: 10 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "no_interior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'colonia', length: 100 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "colonia", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'deleg_munic', length: 60 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "deleg_munic", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "codigo_postal" }),
    __metadata("design:type", Number)
], PersonEntity.prototype, "codigo_postal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'rfc', length: 20 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "rfc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'curp', length: 20 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "curp", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'telefono', length: 20 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo_persona', length: 1 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "tipo_persona", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo_responsable', length: 1 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "tipo_responsable", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'representante', length: 60 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "representante", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_escritura', length: 20 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "no_escritura", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'profesion', length: 60 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "profesion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'curriculum', length: 1 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "curriculum", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'cve_entfed', length: 15 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "cve_entfed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'cve_giro', length: 15 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "cve_giro", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'observaciones', length: 100 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'perfil', length: 500 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "perfil", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'antecedentes_secodam', length: 500 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "antecedentes_secodam", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'antecedentes_pgr', length: 500 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "antecedentes_pgr", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'antecedentes_pff', length: 500 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "antecedentes_pff", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'antecedentes_sera', length: 500 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "antecedentes_sera", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'antecedentes_otros', length: 500 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "antecedentes_otros", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], PersonEntity.prototype, "no_registro", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'email', length: 60 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "lista_negra", length: 2 }),
    __metadata("design:type", String)
], PersonEntity.prototype, "lista_negra", void 0);
PersonEntity = __decorate([
    (0, typeorm_1.Entity)("cat_personas", { schema: "sera" })
], PersonEntity);
exports.PersonEntity = PersonEntity;
//# sourceMappingURL=person.entity.js.map