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
exports.DeductiveEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let DeductiveEntity = class DeductiveEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la deductiva' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_deductiva"
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de servicio de la deductiva' }),
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_servicio",
        length: 200,
        nullable: true
    }),
    __metadata("design:type", String)
], DeductiveEntity.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Deducción ponderada de la deductiva' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "deduccion_ponderada",
        nullable: true
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "weightedDeduction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rango del procentaje inicial de la deductiva' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "rango_porcentaje_inicial",
        nullable: true
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "startingRankPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rango del procentaje final de la deductiva' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "rango_porcentaje_final",
        nullable: true
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "finalRankPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la deductiva' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], DeductiveEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la deductiva' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DeductiveEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la deductiva' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], DeductiveEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la deductiva' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DeductiveEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la deductiva' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "estatus",
        nullable: true
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de contrato de la deductiva' }),
    (0, typeorm_1.Column)("character varying", {
        name: "no_contrato",
        length: 50,
        nullable: false
    }),
    __metadata("design:type", Number)
], DeductiveEntity.prototype, "contractNumber", void 0);
DeductiveEntity = __decorate([
    (0, typeorm_1.Entity)("cat_deductivas", { schema: "sae_nsbdb" })
], DeductiveEntity);
exports.DeductiveEntity = DeductiveEntity;
//# sourceMappingURL=deductive.entity.js.map