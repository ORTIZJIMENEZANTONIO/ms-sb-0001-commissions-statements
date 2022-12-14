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
exports.SiabClasificationEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let SiabClasificationEntity = class SiabClasificationEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador ej 1.' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_clasificacion_siab"
    }),
    __metadata("design:type", Number)
], SiabClasificationEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de tipo ej .1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_tipo",
        nullable: true
    }),
    __metadata("design:type", Number)
], SiabClasificationEntity.prototype, "typeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del tipo' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion_tipo",
        length: 50,
        nullable: true
    }),
    __metadata("design:type", String)
], SiabClasificationEntity.prototype, "typeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de subtipo ej .1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_subtipo",
        nullable: true
    }),
    __metadata("design:type", Number)
], SiabClasificationEntity.prototype, "subtypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del subtipo' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion_subtipo",
        length: 50,
        nullable: true
    }),
    __metadata("design:type", String)
], SiabClasificationEntity.prototype, "subtypeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de ssubtipo ej .1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_ssubtipo",
        nullable: true
    }),
    __metadata("design:type", Number)
], SiabClasificationEntity.prototype, "ssubtypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del ssutipo' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion_ssubtipo",
        length: 50,
        nullable: true
    }),
    __metadata("design:type", String)
], SiabClasificationEntity.prototype, "ssubtypeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de sssubtipo ej .1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_sssubtipo",
        nullable: true
    }),
    __metadata("design:type", Number)
], SiabClasificationEntity.prototype, "sssubtypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del sssubtipo' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion_sssubtipo",
        length: 50,
        nullable: true
    }),
    __metadata("design:type", String)
], SiabClasificationEntity.prototype, "sssubtypeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], SiabClasificationEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], SiabClasificationEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], SiabClasificationEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], SiabClasificationEntity.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], SiabClasificationEntity.prototype, "version", void 0);
SiabClasificationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_clasificacion_siab", { schema: "sae_nsbdb" })
], SiabClasificationEntity);
exports.SiabClasificationEntity = SiabClasificationEntity;
//# sourceMappingURL=siab-clasification.entity.js.map