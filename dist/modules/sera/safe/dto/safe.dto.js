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
exports.SafeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SafeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la boveda por ejemplo 1' }),
    __metadata("design:type", Number)
], SafeDto.prototype, "idSafe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la boveda' }),
    __metadata("design:type", String)
], SafeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la boveda' }),
    __metadata("design:type", String)
], SafeDto.prototype, "ubication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicación de la boveda' }),
    __metadata("design:type", String)
], SafeDto.prototype, "manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    __metadata("design:type", Number)
], SafeDto.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de estado de boveda ej. 1' }),
    __metadata("design:type", Number)
], SafeDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de ciudad de boveda ej. 1' }),
    __metadata("design:type", Number)
], SafeDto.prototype, "cityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de municicpio de boveda ej. 1' }),
    __metadata("design:type", Number)
], SafeDto.prototype, "municipalityCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de localidad de boveda ej. 1' }),
    __metadata("design:type", Number)
], SafeDto.prototype, "localityCode", void 0);
exports.SafeDto = SafeDto;
//# sourceMappingURL=safe.dto.js.map