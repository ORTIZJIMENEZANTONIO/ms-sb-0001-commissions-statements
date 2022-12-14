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
exports.CoordinatingAuthorityEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CoordinatingAuthorityEntity = class CoordinatingAuthorityEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del transferente por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_transferente"
    }),
    __metadata("design:type", Number)
], CoordinatingAuthorityEntity.prototype, "idTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de emisora ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_emisora",
        nullable: false,
    }),
    __metadata("design:type", Number)
], CoordinatingAuthorityEntity.prototype, "idIssuer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de autoridad ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_autoridad",
        nullable: false,
    }),
    __metadata("design:type", Number)
], CoordinatingAuthorityEntity.prototype, "idAthority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de transferente amisor de la autoridad ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_tran_emi_aut",
        nullable: true,
    }),
    __metadata("design:type", Number)
], CoordinatingAuthorityEntity.prototype, "idAuthorityIssuerTransferor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la autoridad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "desc_autoridad",
        length: 150,
        nullable: true,
    }),
    __metadata("design:type", String)
], CoordinatingAuthorityEntity.prototype, "authorityDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de delegación ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_delegacion",
        nullable: true,
    }),
    __metadata("design:type", Number)
], CoordinatingAuthorityEntity.prototype, "idDelegation", void 0);
CoordinatingAuthorityEntity = __decorate([
    (0, typeorm_1.Entity)("cat_autoridad_coordinacion", { schema: "sera" })
], CoordinatingAuthorityEntity);
exports.CoordinatingAuthorityEntity = CoordinatingAuthorityEntity;
//# sourceMappingURL=coordinating-authority.entity.js.map