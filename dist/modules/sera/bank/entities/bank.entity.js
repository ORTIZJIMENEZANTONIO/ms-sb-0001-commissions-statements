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
exports.BankEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let BankEntity = class BankEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código del banco' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        length: 10,
        name: "cve_banco",
        nullable: false
    }),
    __metadata("design:type", String)
], BankEntity.prototype, "bankCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del banco' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "nombre",
        length: 60,
        nullable: false,
    }),
    __metadata("design:type", String)
], BankEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], BankEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ifdsc' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 60,
        name: "ifdsc",
        nullable: true,
    }),
    __metadata("design:type", String)
], BankEntity.prototype, "ifdsc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de fecha ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "tipo_fecha",
        nullable: true,
    }),
    __metadata("design:type", Number)
], BankEntity.prototype, "dateType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "codigo",
        nullable: true,
    }),
    __metadata("design:type", Number)
], BankEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del proveedor ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_proveedor",
        nullable: true,
    }),
    __metadata("design:type", Number)
], BankEntity.prototype, "idProvider", void 0);
BankEntity = __decorate([
    (0, typeorm_1.Entity)("cat_bancos", { schema: "sera" })
], BankEntity);
exports.BankEntity = BankEntity;
//# sourceMappingURL=bank.entity.js.map