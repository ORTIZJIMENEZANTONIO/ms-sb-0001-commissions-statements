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
exports.NotaryEntity = void 0;
const typeorm_1 = require("typeorm");
let NotaryEntity = class NotaryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_notario' }),
    __metadata("design:type", Number)
], NotaryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre', length: 200 }),
    __metadata("design:type", String)
], NotaryEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'valido', length: 2 }),
    __metadata("design:type", String)
], NotaryEntity.prototype, "valido", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_notaria" }),
    __metadata("design:type", Number)
], NotaryEntity.prototype, "no_notaria", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "ubicacion", length: 80 }),
    __metadata("design:type", String)
], NotaryEntity.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "domicilio", length: 80 }),
    __metadata("design:type", String)
], NotaryEntity.prototype, "domicilio", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "telefono", length: 80 }),
    __metadata("design:type", String)
], NotaryEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "correo", length: 80 }),
    __metadata("design:type", String)
], NotaryEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], NotaryEntity.prototype, "no_registro", void 0);
NotaryEntity = __decorate([
    (0, typeorm_1.Entity)("cat_notarios", { schema: "sera" })
], NotaryEntity);
exports.NotaryEntity = NotaryEntity;
//# sourceMappingURL=notary.entity.js.map