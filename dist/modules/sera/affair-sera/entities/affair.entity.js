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
exports.AffairEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let AffairEntity = class AffairEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código del asunto por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "codigo"
    }),
    __metadata("design:type", Number)
], AffairEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del asunto' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion",
        length: 80,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave relación bien' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "clv_relacion_bien",
        length: 1,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairEntity.prototype, "relationPropertyKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de volante' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo_volante",
        length: 2,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairEntity.prototype, "referralNoteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del usuario' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "ver_usuario",
        length: 1,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairEntity.prototype, "versionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_adicion",
        length: 60,
        nullable: true
    }),
    __metadata("design:type", String)
], AffairEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_adicion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AffairEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modifica",
        length: 60,
        nullable: true
    }),
    __metadata("design:type", String)
], AffairEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modifica",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AffairEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Npumero de registro por ejemplo 1' }),
    (0, typeorm_1.Column)({
        type: "integer",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], AffairEntity.prototype, "idRegister", void 0);
AffairEntity = __decorate([
    (0, typeorm_1.Entity)("cat_asuntos", { schema: "sera" })
], AffairEntity);
exports.AffairEntity = AffairEntity;
//# sourceMappingURL=affair.entity.js.map