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
exports.RegionalDelegationEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let RegionalDelegationEntity = class RegionalDelegationEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la delegación regional' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_delegacion_regional"
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        length: 150,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la delegación regional' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id de la entidad delegación regional' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_entidad",
        nullable: true
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "idEntity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la delegación regional' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], RegionalDelegationEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la delegación regional' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], RegionalDelegationEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id de la entidad delegación regional' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_zona_geografica",
        nullable: true
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "idGeographicZona", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la delegación regional' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegado regional de la delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "delegado_regional",
        length: 200,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "regionalDelegate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Domicilio de la oficina de la delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "domicilio_oficina",
        length: 200,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "officeAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la delegación regional' }),
    (0, typeorm_1.Column)("integer", {
        name: "status",
        nullable: true
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de la zona delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_zona",
        length: 150,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "keyZone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'iva de la delegación regional' }),
    (0, typeorm_1.Column)("numeric", {
        name: "iva",
        nullable: true
    }),
    __metadata("design:type", Number)
], RegionalDelegationEntity.prototype, "iva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad de la zona delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "ciudad",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de estado de la zona delegación regional' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_estado",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], RegionalDelegationEntity.prototype, "keyState", void 0);
RegionalDelegationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_delegaciones_regionales", { schema: "sae_nsbdb" })
], RegionalDelegationEntity);
exports.RegionalDelegationEntity = RegionalDelegationEntity;
//# sourceMappingURL=regional-delegation.entity.js.map