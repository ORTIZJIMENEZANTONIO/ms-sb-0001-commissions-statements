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
exports.SafeEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let SafeEntity = class SafeEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la boveda por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_boveda"
    }),
    __metadata("design:type", Number)
], SafeEntity.prototype, "idSafe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la boveda' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 60,
        name: "descripcion",
        nullable: false,
    }),
    __metadata("design:type", String)
], SafeEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la boveda' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 60,
        name: "ubicacion",
        nullable: false,
    }),
    __metadata("design:type", String)
], SafeEntity.prototype, "ubication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la boveda' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 60,
        name: "responsable",
        nullable: false,
    }),
    __metadata("design:type", String)
], SafeEntity.prototype, "manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], SafeEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de estado de boveda ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_estado",
        nullable: true,
    }),
    __metadata("design:type", Number)
], SafeEntity.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de ciudad de boveda ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_ciudad",
        nullable: true,
    }),
    __metadata("design:type", Number)
], SafeEntity.prototype, "cityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de municicpio de boveda ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_municipio",
        nullable: true,
    }),
    __metadata("design:type", Number)
], SafeEntity.prototype, "municipalityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de localidad de boveda ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_localidad",
        nullable: true,
    }),
    __metadata("design:type", Number)
], SafeEntity.prototype, "localityCode", void 0);
SafeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_bovedas", { schema: "sera" })
], SafeEntity);
exports.SafeEntity = SafeEntity;
//# sourceMappingURL=safe.entity.js.map