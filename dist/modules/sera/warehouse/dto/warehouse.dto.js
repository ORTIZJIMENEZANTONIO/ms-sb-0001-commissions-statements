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
exports.WarehouseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class WarehouseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del almacén por ejemplo 1' }),
    __metadata("design:type", Number)
], WarehouseDto.prototype, "idWarehouse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del almacén' }),
    __metadata("design:type", String)
], WarehouseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación del almacén' }),
    __metadata("design:type", String)
], WarehouseDto.prototype, "ubication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación del almacén' }),
    __metadata("design:type", String)
], WarehouseDto.prototype, "manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    __metadata("design:type", Number)
], WarehouseDto.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de estado de almacén ej. 1' }),
    __metadata("design:type", Number)
], WarehouseDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de ciudad de almacén ej. 1' }),
    __metadata("design:type", Number)
], WarehouseDto.prototype, "cityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de municicpio de almacén ej. 1' }),
    __metadata("design:type", Number)
], WarehouseDto.prototype, "municipalityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de localidad de almacén ej. 1' }),
    __metadata("design:type", Number)
], WarehouseDto.prototype, "localityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'activo del almacén' }),
    __metadata("design:type", String)
], WarehouseDto.prototype, "indActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo del almacén' }),
    __metadata("design:type", String)
], WarehouseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegación responsable del almacén' }),
    __metadata("design:type", String)
], WarehouseDto.prototype, "responsibleDelegation", void 0);
exports.WarehouseDto = WarehouseDto;
//# sourceMappingURL=warehouse.dto.js.map