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
exports.DelegationEntity = void 0;
const typeorm_1 = require("typeorm");
let DelegationEntity = class DelegationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_delegacion' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 80 }),
    __metadata("design:type", String)
], DelegationEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_registro' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "no_registro", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'cve_zona_contrato' }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "cve_zona_contrato", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "dif_hora" }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "dif_hora", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "etapa_edo" }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "etapa_edo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cve_zona_vigilancia" }),
    __metadata("design:type", Number)
], DelegationEntity.prototype, "cve_zona_vigilancia", void 0);
DelegationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_delegaciones", { schema: "sera" })
], DelegationEntity);
exports.DelegationEntity = DelegationEntity;
//# sourceMappingURL=delegation.entity.js.map