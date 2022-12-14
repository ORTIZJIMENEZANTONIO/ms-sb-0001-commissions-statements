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
exports.CityEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CityEntity = class CityEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la ciudad' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        name: "id_ciudad",
        length: 30
    }),
    __metadata("design:type", String)
], CityEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador del estado' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "id_estado",
        length: 30,
        nullable: true,
    }),
    __metadata("design:type", String)
], CityEntity.prototype, "idState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad (numbre)' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "ciudad",
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], CityEntity.prototype, "cityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], CityEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CityEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], CityEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CityEntity.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], CityEntity.prototype, "version", void 0);
CityEntity = __decorate([
    (0, typeorm_1.Entity)("cat_ciudades", { schema: "sae_nsbdb" })
], CityEntity);
exports.CityEntity = CityEntity;
//# sourceMappingURL=city.entity.js.map