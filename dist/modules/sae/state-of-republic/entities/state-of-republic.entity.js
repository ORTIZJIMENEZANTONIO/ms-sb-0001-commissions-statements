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
exports.StateOfRepublicEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let StateOfRepublicEntity = class StateOfRepublicEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del estado' }),
    (0, typeorm_1.PrimaryColumn)("character varying", {
        name: "code_estado",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de la entidad del estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_entidad",
        length: 40,
        nullable: true
    }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "entityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del estado' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], StateOfRepublicEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del estado' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], StateOfRepublicEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave del estado' }),
    (0, typeorm_1.Column)({
        name: "cve_estado",
        type: "numeric",
        nullable: false
    }),
    __metadata("design:type", Number)
], StateOfRepublicEntity.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Versión de estado' }),
    (0, typeorm_1.Column)({
        name: "version",
        type: "numeric",
        nullable: true
    }),
    __metadata("design:type", Number)
], StateOfRepublicEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Zona horaria del estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "zona_horaria_std",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "stdTimezone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Versión de la zona horaria del estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "zona_horaria_ver",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], StateOfRepublicEntity.prototype, "verTimezone", void 0);
StateOfRepublicEntity = __decorate([
    (0, typeorm_1.Entity)("cat_estado", { schema: "sae_nsbdb" })
], StateOfRepublicEntity);
exports.StateOfRepublicEntity = StateOfRepublicEntity;
//# sourceMappingURL=state-of-republic.entity.js.map