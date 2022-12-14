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
exports.DeductiveDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DeductiveDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de servicio de la deductiva' }),
    __metadata("design:type", String)
], DeductiveDto.prototype, "serviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Deducción ponderada de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "weightedDeduction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rango del procentaje inicial de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "startingRankPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rango del procentaje final de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "finalRankPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la deductiva' }),
    __metadata("design:type", Date)
], DeductiveDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la deductiva' }),
    __metadata("design:type", String)
], DeductiveDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la deductiva' }),
    __metadata("design:type", Date)
], DeductiveDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de contrato de la deductiva' }),
    __metadata("design:type", Number)
], DeductiveDto.prototype, "contractNumber", void 0);
exports.DeductiveDto = DeductiveDto;
//# sourceMappingURL=deductive.dto.js.map