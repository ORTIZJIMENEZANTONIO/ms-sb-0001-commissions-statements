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
exports.LawyerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LawyerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del abogado por ejemplo 1' }),
    __metadata("design:type", Number)
], LawyerDto.prototype, "idLawyer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de despacho ej. 1' }),
    __metadata("design:type", Number)
], LawyerDto.prototype, "idOffice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del abogado' }),
    __metadata("design:type", Number)
], LawyerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Calle N' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número exterior' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "streetNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número interior' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "apartmentNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Colonia' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "suburb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegación o municipio' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "delegation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'codigo postal ej. 44556' }),
    __metadata("design:type", Number)
], LawyerDto.prototype, "zipCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'RFC del abogado' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "rfc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Teléfono' }),
    __metadata("design:type", String)
], LawyerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de despacho ej. 1' }),
    __metadata("design:type", Number)
], LawyerDto.prototype, "registerNumber", void 0);
exports.LawyerDto = LawyerDto;
//# sourceMappingURL=lawyer.dto.js.map