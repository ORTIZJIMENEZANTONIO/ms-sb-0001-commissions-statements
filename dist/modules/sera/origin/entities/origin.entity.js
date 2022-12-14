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
exports.OriginEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let OriginEntity = class OriginEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de procedencia' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_procedencia"
    }),
    __metadata("design:type", Number)
], OriginEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de transferente ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_transferente",
        nullable: false
    }),
    __metadata("design:type", Number)
], OriginEntity.prototype, "idTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave del transferente' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_transferente",
        length: 255,
        nullable: false
    }),
    __metadata("design:type", String)
], OriginEntity.prototype, "keyTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "desc_procedencia",
        length: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], OriginEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo",
        length: 255,
        nullable: false
    }),
    __metadata("design:type", String)
], OriginEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dirección' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "direccion",
        length: 255,
        nullable: false
    }),
    __metadata("design:type", String)
], OriginEntity.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "ciudad",
        length: 255,
        nullable: false
    }),
    __metadata("design:type", String)
], OriginEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. ciudad ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_ciudad",
        nullable: true
    }),
    __metadata("design:type", Number)
], OriginEntity.prototype, "idCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave Entidad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_entfed",
        length: 15,
        nullable: false
    }),
    __metadata("design:type", String)
], OriginEntity.prototype, "keyEntityFederative", void 0);
OriginEntity = __decorate([
    (0, typeorm_1.Entity)("cat_procedencia", { schema: "sera" })
], OriginEntity);
exports.OriginEntity = OriginEntity;
//# sourceMappingURL=origin.entity.js.map