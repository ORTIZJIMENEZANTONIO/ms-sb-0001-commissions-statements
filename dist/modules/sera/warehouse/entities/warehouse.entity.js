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
exports.WarehouseEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let WarehouseEntity = class WarehouseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del almacén por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_almacen"
    }),
    __metadata("design:type", Number)
], WarehouseEntity.prototype, "idWarehouse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 200,
        name: "descripcion",
        nullable: false,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 200,
        name: "ubicacion",
        nullable: false,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "ubication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 30,
        name: "responsable",
        nullable: false,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], WarehouseEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de estado de almacén ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_estado",
        nullable: true,
    }),
    __metadata("design:type", Number)
], WarehouseEntity.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de ciudad de almacén ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_ciudad",
        nullable: true,
    }),
    __metadata("design:type", Number)
], WarehouseEntity.prototype, "cityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de municicpio de almacén ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_municipio",
        nullable: true,
    }),
    __metadata("design:type", Number)
], WarehouseEntity.prototype, "municipalityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de localidad de almacén ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo_localidad",
        nullable: true,
    }),
    __metadata("design:type", Number)
], WarehouseEntity.prototype, "localityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'activo del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 1,
        name: "ind_activo",
        nullable: true,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "indActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 50,
        name: "tipo_almacen",
        nullable: true,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegación responsable del almacén' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "delegacion_res",
        nullable: true,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "responsibleDelegation", void 0);
WarehouseEntity = __decorate([
    (0, typeorm_1.Entity)("cat_almacenes", { schema: "sera" })
], WarehouseEntity);
exports.WarehouseEntity = WarehouseEntity;
//# sourceMappingURL=warehouse.entity.js.map