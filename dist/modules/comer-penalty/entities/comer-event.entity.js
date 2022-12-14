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
exports.ComerEventEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerEventEntity = class ComerEventEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id_evento',
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'id_tpevento', precision: 2, scale: 0 }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "eventTpId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'id_estatusvta', length: 4 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "statusVtaId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_proceso',
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "processKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'observaciones',
        nullable: true,
        length: 300,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'direccion', nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fec_fallo', nullable: true }),
    __metadata("design:type", Date)
], ComerEventEntity.prototype, "failureDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'lugar', nullable: true, length: 100 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fec_evento', nullable: true }),
    __metadata("design:type", Date)
], ComerEventEntity.prototype, "eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'texto1', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "text1", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'texto2', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "text2", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'firmante', nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "signer", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'firmante_cargo',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "signerPosition", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'notas', nullable: true, length: 300 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'textofin3',
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "endText3", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'textofin4',
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "endText4", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'costo_base',
        nullable: true,
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "baseCost", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'num_base_vend',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "baseVendNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'usuario', nullable: true, length: 30 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'mes', nullable: true, precision: 2, scale: 0 }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "month", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'anio', nullable: true, precision: 4, scale: 0 }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_delegacion',
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "delegationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'fase_inmu',
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "phaseInmu", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'id_tercerocomer',
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "thirdComerId", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_notificacion', nullable: true }),
    __metadata("design:type", Date)
], ComerEventEntity.prototype, "notificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_cierre_evento', nullable: true }),
    __metadata("design:type", Date)
], ComerEventEntity.prototype, "eventClosingDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'id_tpsolaval',
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "tpsolavalId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'aplica_iva',
        nullable: true,
        length: 2,
        default: () => "'2'",
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "vatApplies", void 0);
ComerEventEntity = __decorate([
    (0, typeorm_1.Entity)('comer_eventos', { schema: 'sera' })
], ComerEventEntity);
exports.ComerEventEntity = ComerEventEntity;
//# sourceMappingURL=comer-event.entity.js.map