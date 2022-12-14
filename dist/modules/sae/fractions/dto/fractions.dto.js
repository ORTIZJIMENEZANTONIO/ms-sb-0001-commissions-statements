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
exports.FractionsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FractionsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del la fracción' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Codigo de fracción' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nivel' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de fracción padre' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de norma' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "normId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unidad' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de clasificacion siab' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "clasificationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario creacion' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "userCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha creacion' }),
    __metadata("design:type", Date)
], FractionsDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario modificacion' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha modificacion' }),
    __metadata("design:type", Date)
], FractionsDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de tipo relevante' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "relevantTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código erp 1' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "codeErp1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código erp 2' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "codeErp2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código erp 3' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "codeErp3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cantidad decimal' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "decimalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus' }),
    __metadata("design:type", String)
], FractionsDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código fracción' }),
    __metadata("design:type", Number)
], FractionsDto.prototype, "fractionCode", void 0);
exports.FractionsDto = FractionsDto;
//# sourceMappingURL=fractions.dto.js.map