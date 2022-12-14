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
exports.LegalAffairEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let LegalAffairEntity = class LegalAffairEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intedificador del asunto por ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_asunto_juridico"
    }),
    __metadata("design:type", Number)
], LegalAffairEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del asunto' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "asunto_juridico",
        length: 200,
        nullable: true,
    }),
    __metadata("design:type", String)
], LegalAffairEntity.prototype, "legalAffair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], LegalAffairEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], LegalAffairEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], LegalAffairEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], LegalAffairEntity.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true,
    }),
    __metadata("design:type", Number)
], LegalAffairEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'status ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "estatus",
        nullable: true,
    }),
    __metadata("design:type", Number)
], LegalAffairEntity.prototype, "status", void 0);
LegalAffairEntity = __decorate([
    (0, typeorm_1.Entity)("cat_asuntos_juridicos", { schema: "sae_nsbdb" })
], LegalAffairEntity);
exports.LegalAffairEntity = LegalAffairEntity;
//# sourceMappingURL=legal-affair.entity.js.map