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
exports.ZipCodeEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ZipCodeEntity = class ZipCodeEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del código postal' }),
    (0, typeorm_1.PrimaryColumn)("character varying", {
        name: "codigo",
        length: 5,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "codeZip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de la entidad federativa' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_entidad",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "entityKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de municipio' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_municipio",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "townshipKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de localidad' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_localidad",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "localityKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de asentamiento' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_asentamiento",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "settlementKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el código postal' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del código postal' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ZipCodeEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del código postal' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del código postal' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ZipCodeEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la emisora' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], ZipCodeEntity.prototype, "version", void 0);
ZipCodeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_codigos_postales", { schema: "sae_nsbdb" })
], ZipCodeEntity);
exports.ZipCodeEntity = ZipCodeEntity;
//# sourceMappingURL=zipCodeEntity.entity.js.map