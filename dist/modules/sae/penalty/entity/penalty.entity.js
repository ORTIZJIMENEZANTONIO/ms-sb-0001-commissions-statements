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
exports.PenaltyEntity = void 0;
const typeorm_1 = require("typeorm");
let PenaltyEntity = class PenaltyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_penalizacion' }),
    __metadata("design:type", Number)
], PenaltyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo_servicio', length: 200 }),
    __metadata("design:type", String)
], PenaltyEntity.prototype, "tipo_servicio", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'porcentaje_penalizacion' }),
    __metadata("design:type", Number)
], PenaltyEntity.prototype, "porcentaje_penalizacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'dias_equivalente' }),
    __metadata("design:type", Number)
], PenaltyEntity.prototype, "dias_equivalente", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_creacion', length: 100 }),
    __metadata("design:type", String)
], PenaltyEntity.prototype, "usuario_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PenaltyEntity.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_modificacion', length: 100 }),
    __metadata("design:type", String)
], PenaltyEntity.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PenaltyEntity.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "estatus" }),
    __metadata("design:type", Number)
], PenaltyEntity.prototype, "estatus", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "no_contrato", length: 50 }),
    __metadata("design:type", String)
], PenaltyEntity.prototype, "no_contrato", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], PenaltyEntity.prototype, "version", void 0);
PenaltyEntity = __decorate([
    (0, typeorm_1.Entity)("cat_penalizaciones", { schema: "sae_nsbdb" })
], PenaltyEntity);
exports.PenaltyEntity = PenaltyEntity;
//# sourceMappingURL=penalty.entity.js.map