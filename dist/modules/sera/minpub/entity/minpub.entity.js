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
exports.MinpubEntity = void 0;
const typeorm_1 = require("typeorm");
let MinpubEntity = class MinpubEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_minpub' }),
    __metadata("design:type", Number)
], MinpubEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 100 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'responsable', length: 100 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'calle', length: 60 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_interior', length: 10 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "no_interior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'no_exterior', length: 10 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "no_exterior", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'colonia', length: 60 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "colonia", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "codigo_postal" }),
    __metadata("design:type", Number)
], MinpubEntity.prototype, "codigo_postal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "deleg_munic", length: 60 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "deleg_munic", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_ciudad" }),
    __metadata("design:type", Number)
], MinpubEntity.prototype, "no_ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "telefono", length: 20 }),
    __metadata("design:type", String)
], MinpubEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], MinpubEntity.prototype, "no_registro", void 0);
MinpubEntity = __decorate([
    (0, typeorm_1.Entity)("cat_minpub", { schema: "sera" })
], MinpubEntity);
exports.MinpubEntity = MinpubEntity;
//# sourceMappingURL=minpub.entity.js.map