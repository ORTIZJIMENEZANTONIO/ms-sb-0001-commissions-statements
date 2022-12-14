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
exports.HolidayEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let HolidayEntity = class HolidayEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del día festivo' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_dia_festivo"
    }),
    __metadata("design:type", Number)
], HolidayEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha del día festivo' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "dia_festivo",
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], HolidayEntity.prototype, "holidayDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del día festivo' }),
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], HolidayEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el día festivo' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], HolidayEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del día festivo' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], HolidayEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del día festivo' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], HolidayEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del día festivo' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], HolidayEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del día festivo' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true
    }),
    __metadata("design:type", Number)
], HolidayEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus del día festivo' }),
    (0, typeorm_1.Column)("integer", {
        name: "estatus",
        nullable: true
    }),
    __metadata("design:type", Number)
], HolidayEntity.prototype, "status", void 0);
HolidayEntity = __decorate([
    (0, typeorm_1.Entity)("cat_dias_festivos", { schema: "sae_nsbdb" })
], HolidayEntity);
exports.HolidayEntity = HolidayEntity;
//# sourceMappingURL=holiday.entity.js.map