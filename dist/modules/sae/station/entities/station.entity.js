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
exports.StationEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let StationEntity = class StationEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la emisora' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_emisora"
    }),
    __metadata("design:type", Number)
], StationEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id del transferente de la emisora' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_transferente",
        nullable: false
    }),
    __metadata("design:type", Number)
], StationEntity.prototype, "idTransferor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la entidad emisora' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 30,
        name: "id_entidad",
        nullable: true
    }),
    __metadata("design:type", String)
], StationEntity.prototype, "idEntity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de las emisoras' }),
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_emisora",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], StationEntity.prototype, "stationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la emisora' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], StationEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la emisora' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], StationEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la emisora' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], StationEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la emisora' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], StationEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de estado de la emisora' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "cve_estado",
        nullable: true
    }),
    __metadata("design:type", Number)
], StationEntity.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la emisora' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], StationEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la emisora' }),
    (0, typeorm_1.Column)("integer", {
        name: "status",
        nullable: true
    }),
    __metadata("design:type", Number)
], StationEntity.prototype, "status", void 0);
StationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_emisoras", { schema: "sae_nsbdb" })
], StationEntity);
exports.StationEntity = StationEntity;
//# sourceMappingURL=station.entity.js.map