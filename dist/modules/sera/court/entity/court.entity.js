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
exports.CourtEntity = void 0;
const typeorm_1 = require("typeorm");
let CourtEntity = class CourtEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_juzgado' }),
    __metadata("design:type", Number)
], CourtEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 100 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'responsable', length: 100 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'calle', length: 60 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_exterior', length: 10 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "no_exterior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_interior', length: 10 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "no_interior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'colonia', length: 100 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "colonia", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'deleg_munic', length: 60 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "deleg_munic", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "codigo_postal" }),
    __metadata("design:type", Number)
], CourtEntity.prototype, "codigo_postal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "telefono", length: 20 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cve_circuito", length: 15 }),
    __metadata("design:type", String)
], CourtEntity.prototype, "cve_circuito", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], CourtEntity.prototype, "no_registro", void 0);
CourtEntity = __decorate([
    (0, typeorm_1.Entity)("cat_juzgados", { schema: "sera" })
], CourtEntity);
exports.CourtEntity = CourtEntity;
//# sourceMappingURL=court.entity.js.map