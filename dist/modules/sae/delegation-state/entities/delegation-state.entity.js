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
exports.DelegationStateEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let DelegationStateEntity = class DelegationStateEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la delegación estado' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_delegacion_regional"
    }),
    __metadata("design:type", Number)
], DelegationStateEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'C+odigo del estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "code_estado",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], DelegationStateEntity.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la delegación estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], DelegationStateEntity.prototype, "userCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la delegación estado' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DelegationStateEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la delegación estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], DelegationStateEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la delegación estado' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DelegationStateEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la delegación estado' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], DelegationStateEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la delegación estado' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "cve_estado",
        nullable: true
    }),
    __metadata("design:type", Number)
], DelegationStateEntity.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de contrato de la delegación estado' }),
    (0, typeorm_1.Column)("character varying", {
        name: "status",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", Number)
], DelegationStateEntity.prototype, "status", void 0);
DelegationStateEntity = __decorate([
    (0, typeorm_1.Entity)("cat_delegaciones_estados", { schema: "sae_nsbdb" })
], DelegationStateEntity);
exports.DelegationStateEntity = DelegationStateEntity;
//# sourceMappingURL=delegation-state.entity.js.map