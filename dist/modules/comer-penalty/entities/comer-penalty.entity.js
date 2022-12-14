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
exports.ComerPenaltyEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerPenaltyEntity = class ComerPenaltyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('numeric', { name: 'id_cliente', precision: 8, scale: 0 }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'id_lote',
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "lotId", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'id_penalizacion', precision: 4, scale: 0 }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'id_evento',
        nullable: true,
        precision: 7,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'lote_publico',
        nullable: true,
        precision: 8,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "publicLot", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_inicial', nullable: true }),
    __metadata("design:type", Date)
], ComerPenaltyEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_final', nullable: true }),
    __metadata("design:type", Date)
], ComerPenaltyEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'tipo_proceso',
        nullable: true,
        precision: 4,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "typeProcess", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'refe_oficio_otro',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ComerPenaltyEntity.prototype, "refeOfficeOther", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'usuario', nullable: true, length: 100 }),
    __metadata("design:type", String)
], ComerPenaltyEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'p_bandera',
        nullable: true,
        precision: 1,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "pFlag", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_registro',
        nullable: true,
        precision: 12,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPenaltyEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'usr_penaliza',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerPenaltyEntity.prototype, "userPenalty", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fec_penaliza', nullable: true }),
    __metadata("design:type", Date)
], ComerPenaltyEntity.prototype, "penaltiDate", void 0);
ComerPenaltyEntity = __decorate([
    (0, typeorm_1.Entity)('comer_penalizaciones', { schema: 'sera' })
], ComerPenaltyEntity);
exports.ComerPenaltyEntity = ComerPenaltyEntity;
//# sourceMappingURL=comer-penalty.entity.js.map