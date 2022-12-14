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
exports.AffairSaeEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let AffairSaeEntity = class AffairSaeEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intedificador del asunto por ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_asunto"
    }),
    __metadata("design:type", Number)
], AffairSaeEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del asunto' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "asunto",
        length: 200,
        nullable: false,
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "affair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Registro de bienes' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "registro_bienes",
        length: 1,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "propertyRecord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AffairSaeEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AffairSaeEntity.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del usuario' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "ver_usuario",
        length: 20,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "versionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de volante' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo_volante",
        length: 20,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "referralNoteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true,
    }),
    __metadata("design:type", Number)
], AffairSaeEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'status ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "estatus",
        nullable: true,
    }),
    __metadata("design:type", Number)
], AffairSaeEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Proceso detonante' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "proceso_detona",
        length: 20,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairSaeEntity.prototype, "detonationProcess", void 0);
AffairSaeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_asuntos", { schema: "sae_nsbdb" })
], AffairSaeEntity);
exports.AffairSaeEntity = AffairSaeEntity;
//# sourceMappingURL=affair-sae.entity.js.map