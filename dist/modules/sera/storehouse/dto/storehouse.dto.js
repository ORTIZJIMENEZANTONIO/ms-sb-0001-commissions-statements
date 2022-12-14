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
exports.StorehouseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StorehouseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la bodega por ejemplo 1' }),
    __metadata("design:type", String)
], StorehouseDto.prototype, "idStorehouse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la bodega' }),
    __metadata("design:type", String)
], StorehouseDto.prototype, "manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la bodega' }),
    __metadata("design:type", String)
], StorehouseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de municicpio de bodega ej. 1' }),
    __metadata("design:type", String)
], StorehouseDto.prototype, "municipality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de localidad de bodega ej. 1' }),
    __metadata("design:type", String)
], StorehouseDto.prototype, "locality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la bodega' }),
    __metadata("design:type", String)
], StorehouseDto.prototype, "ubication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la bodega' }),
    __metadata("design:type", Number)
], StorehouseDto.prototype, "idEntity", void 0);
exports.StorehouseDto = StorehouseDto;
//# sourceMappingURL=storehouse.dto.js.map