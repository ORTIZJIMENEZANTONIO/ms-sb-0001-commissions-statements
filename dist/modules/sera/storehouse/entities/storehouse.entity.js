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
exports.StorehouseEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let StorehouseEntity = class StorehouseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la bodega por ejemplo 1' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        length: 255,
        name: "id_bodegareg",
        nullable: false,
    }),
    __metadata("design:type", String)
], StorehouseEntity.prototype, "idStorehouse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la bodega' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 255,
        name: "responsable",
        nullable: true,
    }),
    __metadata("design:type", String)
], StorehouseEntity.prototype, "manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la bodega' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 255,
        name: "describe_bod",
        nullable: true,
    }),
    __metadata("design:type", String)
], StorehouseEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de municicpio de bodega ej. 1' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 255,
        name: "municipio",
        nullable: true,
    }),
    __metadata("design:type", String)
], StorehouseEntity.prototype, "municipality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de localidad de bodega ej. 1' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 255,
        name: "localidad",
        nullable: true,
    }),
    __metadata("design:type", String)
], StorehouseEntity.prototype, "locality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la bodega' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 255,
        name: "ubicadomicil",
        nullable: true,
    }),
    __metadata("design:type", String)
], StorehouseEntity.prototype, "ubication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la bodega' }),
    (0, typeorm_1.Column)({
        type: "integer",
        name: "id_entidad_f",
        nullable: true,
    }),
    __metadata("design:type", Number)
], StorehouseEntity.prototype, "idEntity", void 0);
StorehouseEntity = __decorate([
    (0, typeorm_1.Entity)("cat_bodegas", { schema: "sera" })
], StorehouseEntity);
exports.StorehouseEntity = StorehouseEntity;
//# sourceMappingURL=storehouse.entity.js.map