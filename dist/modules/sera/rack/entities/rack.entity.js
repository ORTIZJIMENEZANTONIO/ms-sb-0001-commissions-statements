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
exports.RackEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let RackEntity = class RackEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del estante ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_rack"
    }),
    __metadata("design:type", Number)
], RackEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del almacén ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_almacen",
        nullable: false
    }),
    __metadata("design:type", Number)
], RackEntity.prototype, "idWarehouse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del lote ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_lote",
        nullable: false
    }),
    __metadata("design:type", Number)
], RackEntity.prototype, "idBatch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la pregunta' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion",
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], RackEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus ej. a' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "estatus",
        length: 1,
        nullable: false
    }),
    __metadata("design:type", String)
], RackEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], RackEntity.prototype, "registerNumber", void 0);
RackEntity = __decorate([
    (0, typeorm_1.Entity)("cat_racks", { schema: "sera" })
], RackEntity);
exports.RackEntity = RackEntity;
//# sourceMappingURL=rack.entity.js.map