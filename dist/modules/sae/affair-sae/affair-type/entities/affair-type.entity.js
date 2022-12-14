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
exports.AffairTypeEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let AffairTypeEntity = class AffairTypeEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código del asunto por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "codigo"
    }),
    __metadata("design:type", Number)
], AffairTypeEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave relación bien' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "clv_relacion_bien",
        length: 1,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairTypeEntity.prototype, "relationPropertyKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de volante' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo_volante",
        length: 2,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairTypeEntity.prototype, "referralNoteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del usuario' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "ver_usuario",
        length: 1,
        nullable: true,
    }),
    __metadata("design:type", String)
], AffairTypeEntity.prototype, "versionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Npumero de registro por ejemplo 1' }),
    (0, typeorm_1.Column)({
        type: "integer",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], AffairTypeEntity.prototype, "idRegister", void 0);
AffairTypeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_asunt_tipo", { schema: "sera" })
], AffairTypeEntity);
exports.AffairTypeEntity = AffairTypeEntity;
//# sourceMappingURL=affair-type.entity.js.map