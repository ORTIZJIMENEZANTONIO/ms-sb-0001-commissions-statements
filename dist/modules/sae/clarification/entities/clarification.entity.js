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
exports.ClarificationEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ClarificationEntity = class ClarificationEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del asunto por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "idaclaraciones"
    }),
    __metadata("design:type", Number)
], ClarificationEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aclaración' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "aclaraciones",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ClarificationEntity.prototype, "clarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "tipo",
        nullable: true
    }),
    __metadata("design:type", Number)
], ClarificationEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], ClarificationEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ClarificationEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], ClarificationEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ClarificationEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], ClarificationEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Acrtivo ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "activo",
        nullable: true
    }),
    __metadata("design:type", Number)
], ClarificationEntity.prototype, "active", void 0);
ClarificationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_aclaraciones", { schema: "sae_nsbdb" })
], ClarificationEntity);
exports.ClarificationEntity = ClarificationEntity;
//# sourceMappingURL=clarification.entity.js.map