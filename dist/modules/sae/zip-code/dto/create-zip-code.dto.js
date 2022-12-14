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
exports.CreateZipCodeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateZipCodeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del código postal' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de la entidad federativa' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "entityKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de municipio' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "townshipKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de localidad' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "localityKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de asentamiento' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "settlementKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el código postal' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del código postal' }),
    __metadata("design:type", Date)
], CreateZipCodeDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del código postal' }),
    __metadata("design:type", String)
], CreateZipCodeDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del código postal' }),
    __metadata("design:type", Date)
], CreateZipCodeDto.prototype, "modificationDate", void 0);
exports.CreateZipCodeDto = CreateZipCodeDto;
//# sourceMappingURL=create-zip-code.dto.js.map