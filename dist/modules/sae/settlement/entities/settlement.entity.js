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
exports.SettlementEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let SettlementEntity = class SettlementEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del asentamiento' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        name: "cve_asentamiento",
        length: 30
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de entidad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_entidad",
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "keyEntity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de municipio' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_municipio",
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "keyTownship", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de localidad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_localidad",
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "keyLocality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de asentamiento' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "nombre_asentamiento",
        length: 30,
        nullable: true,
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de tipo asentamiento' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_tipo_asentamiento",
        length: 30,
        nullable: false,
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usuario_creacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_creacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], SettlementEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], SettlementEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_modificacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], SettlementEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], SettlementEntity.prototype, "version", void 0);
SettlementEntity = __decorate([
    (0, typeorm_1.Entity)("cat_asentamiento", { schema: "sae_nsbdb" })
], SettlementEntity);
exports.SettlementEntity = SettlementEntity;
//# sourceMappingURL=settlement.entity.js.map