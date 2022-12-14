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
exports.BatteryEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let BatteryEntity = class BatteryEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del almacén por ejemplo 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_bateria"
    }),
    __metadata("design:type", Number)
], BatteryEntity.prototype, "idBattery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_guardavalor",
        length: 5,
        nullable: false,
    }),
    __metadata("design:type", String)
], BatteryEntity.prototype, "storeCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 30,
        name: "descripcion",
        nullable: false,
    }),
    __metadata("design:type", String)
], BatteryEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación del almacén' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 1,
        name: "estatus",
        nullable: false,
    }),
    __metadata("design:type", String)
], BatteryEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], BatteryEntity.prototype, "registerNumber", void 0);
BatteryEntity = __decorate([
    (0, typeorm_1.Entity)("cat_baterias", { schema: "sera" })
], BatteryEntity);
exports.BatteryEntity = BatteryEntity;
//# sourceMappingURL=battery.entity.js.map