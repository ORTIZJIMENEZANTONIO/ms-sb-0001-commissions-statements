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
exports.AuthoritySaeEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let AuthoritySaeEntity = class AuthoritySaeEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_autoridad"
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de transferente ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_transferente",
        nullable: false,
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "idTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de emisora ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_emisora",
        nullable: false,
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "idIssuer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de ciudad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "id_ciudad",
        length: 30,
        nullable: true,
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "idCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de la autoridad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "nombre_autoridad",
        length: 150,
        nullable: true,
    }),
    __metadata("design:type", String)
], AuthoritySaeEntity.prototype, "authorityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de estado' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "code_estado",
        length: 30,
        nullable: true,
    }),
    __metadata("design:type", String)
], AuthoritySaeEntity.prototype, "codeState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usuario_creacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], AuthoritySaeEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_creacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AuthoritySaeEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], AuthoritySaeEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_modificacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AuthoritySaeEntity.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de estado ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "cve_estado",
        nullable: true
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave única ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "cve_unica",
        nullable: true
    }),
    __metadata("design:type", Number)
], AuthoritySaeEntity.prototype, "keyUnique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus' }),
    (0, typeorm_1.Column)("character varying", {
        name: "status",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], AuthoritySaeEntity.prototype, "status", void 0);
AuthoritySaeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_autoridades", { schema: "sae_nsbdb" })
], AuthoritySaeEntity);
exports.AuthoritySaeEntity = AuthoritySaeEntity;
//# sourceMappingURL=authority-sae.entity.js.map