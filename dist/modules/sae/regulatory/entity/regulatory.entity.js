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
exports.RegulatoryEntity = void 0;
const typeorm_1 = require("typeorm");
let RegulatoryEntity = class RegulatoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_regulacion' }),
    __metadata("design:type", Number)
], RegulatoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'id_fraccion' }),
    __metadata("design:type", Number)
], RegulatoryEntity.prototype, "id_fraccion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'numero', length: 30 }),
    __metadata("design:type", String)
], RegulatoryEntity.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 600 }),
    __metadata("design:type", String)
], RegulatoryEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'validar_ef', length: 5 }),
    __metadata("design:type", String)
], RegulatoryEntity.prototype, "validar_ef", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'validar_ec', length: 5 }),
    __metadata("design:type", String)
], RegulatoryEntity.prototype, "validar_ec", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_creacion', length: 100 }),
    __metadata("design:type", String)
], RegulatoryEntity.prototype, "usuario_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], RegulatoryEntity.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_modificacion', length: 100 }),
    __metadata("design:type", String)
], RegulatoryEntity.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], RegulatoryEntity.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], RegulatoryEntity.prototype, "version", void 0);
RegulatoryEntity = __decorate([
    (0, typeorm_1.Entity)("cat_regulaciones", { schema: "sae_nsbdb" })
], RegulatoryEntity);
exports.RegulatoryEntity = RegulatoryEntity;
//# sourceMappingURL=regulatory.entity.js.map