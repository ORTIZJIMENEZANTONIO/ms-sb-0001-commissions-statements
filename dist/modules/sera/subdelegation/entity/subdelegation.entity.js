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
exports.SubdelegationEntity = void 0;
const typeorm_1 = require("typeorm");
let SubdelegationEntity = class SubdelegationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_subdelegacion' }),
    __metadata("design:type", Number)
], SubdelegationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 30 }),
    __metadata("design:type", String)
], SubdelegationEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_delegacion" }),
    __metadata("design:type", Number)
], SubdelegationEntity.prototype, "no_delegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_consecutivo_diario" }),
    __metadata("design:type", Number)
], SubdelegationEntity.prototype, "no_consecutivo_diario", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fec_consecutivo_diario", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], SubdelegationEntity.prototype, "fec_consecutivo_diario", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], SubdelegationEntity.prototype, "no_registro", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "etapa_edo" }),
    __metadata("design:type", Number)
], SubdelegationEntity.prototype, "etapa_edo", void 0);
SubdelegationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_ciudades", { schema: "sera" })
], SubdelegationEntity);
exports.SubdelegationEntity = SubdelegationEntity;
//# sourceMappingURL=subdelegation.entity.js.map