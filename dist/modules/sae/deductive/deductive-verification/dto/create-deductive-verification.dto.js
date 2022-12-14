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
exports.CreateDeductiveVerificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateDeductiveVerificationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la verificación deductiva' }),
    __metadata("design:type", Number)
], CreateDeductiveVerificationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la verificación deductiva' }),
    __metadata("design:type", String)
], CreateDeductiveVerificationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la deductiva' }),
    __metadata("design:type", Number)
], CreateDeductiveVerificationDto.prototype, "percentagePena", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de la deductiva' }),
    __metadata("design:type", String)
], CreateDeductiveVerificationDto.prototype, "verificationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la verificación deductiva' }),
    __metadata("design:type", String)
], CreateDeductiveVerificationDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la deductiva' }),
    __metadata("design:type", Date)
], CreateDeductiveVerificationDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la deductiva' }),
    __metadata("design:type", String)
], CreateDeductiveVerificationDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la deductiva' }),
    __metadata("design:type", Date)
], CreateDeductiveVerificationDto.prototype, "modificationDate", void 0);
exports.CreateDeductiveVerificationDto = CreateDeductiveVerificationDto;
//# sourceMappingURL=create-deductive-verification.dto.js.map