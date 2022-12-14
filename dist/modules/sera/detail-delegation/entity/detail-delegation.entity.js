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
exports.DetailDelegationEntity = void 0;
const typeorm_1 = require("typeorm");
let DetailDelegationEntity = class DetailDelegationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_detalle' }),
    __metadata("design:type", Number)
], DetailDelegationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_delegacion' }),
    __metadata("design:type", Number)
], DetailDelegationEntity.prototype, "no_delegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre', length: 50 }),
    __metadata("design:type", String)
], DetailDelegationEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'area', length: 50 }),
    __metadata("design:type", String)
], DetailDelegationEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'puesto', length: 30 }),
    __metadata("design:type", String)
], DetailDelegationEntity.prototype, "puesto", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'ubicacion', length: 30 }),
    __metadata("design:type", String)
], DetailDelegationEntity.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'direccion', length: 300 }),
    __metadata("design:type", String)
], DetailDelegationEntity.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'correo', length: 30 }),
    __metadata("design:type", String)
], DetailDelegationEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'tel1' }),
    __metadata("design:type", Number)
], DetailDelegationEntity.prototype, "tel1", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tel2" }),
    __metadata("design:type", Number)
], DetailDelegationEntity.prototype, "tel2", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tel3" }),
    __metadata("design:type", Number)
], DetailDelegationEntity.prototype, "tel3", void 0);
DetailDelegationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_delegaciondet", { schema: "sera" })
], DetailDelegationEntity);
exports.DetailDelegationEntity = DetailDelegationEntity;
//# sourceMappingURL=detail-delegation.entity.js.map