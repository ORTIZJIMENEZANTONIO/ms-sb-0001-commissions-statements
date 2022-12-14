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
exports.LawyerEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let LawyerEntity = class LawyerEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del abogado por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_abogado"
    }),
    __metadata("design:type", Number)
], LawyerEntity.prototype, "idLawyer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de despacho ej. 1' }),
    (0, typeorm_1.Column)({
        type: "integer",
        name: "no_despacho",
        nullable: false,
    }),
    __metadata("design:type", Number)
], LawyerEntity.prototype, "idOffice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del abogado' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 80,
        name: "nombre",
        nullable: false,
    }),
    __metadata("design:type", Number)
], LawyerEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Calle N' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 60,
        name: "calle",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número exterior' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 10,
        name: "no_exterior",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "streetNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número interior' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 10,
        name: "no_interior",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "apartmentNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Colonia' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 100,
        name: "colonia",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "suburb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegación o municipio' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 60,
        name: "deleg_munic",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "delegation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'codigo postal ej. 44556' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_postal",
        nullable: true,
    }),
    __metadata("design:type", Number)
], LawyerEntity.prototype, "zipCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'RFC del abogado' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 20,
        name: "rfc",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "rfc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Teléfono' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 20,
        name: "telefono",
        nullable: true,
    }),
    __metadata("design:type", String)
], LawyerEntity.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de despacho ej. 1' }),
    (0, typeorm_1.Column)({
        type: "integer",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], LawyerEntity.prototype, "registerNumber", void 0);
LawyerEntity = __decorate([
    (0, typeorm_1.Entity)("cat_abogados", { schema: "sera" })
], LawyerEntity);
exports.LawyerEntity = LawyerEntity;
//# sourceMappingURL=laywer.entity.js.map