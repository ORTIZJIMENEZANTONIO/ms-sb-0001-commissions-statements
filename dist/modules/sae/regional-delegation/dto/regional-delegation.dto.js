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
exports.RegionalDelegationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegionalDelegationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id de la entidad delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "idEntity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la delegación regional' }),
    __metadata("design:type", Date)
], RegionalDelegationDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la delegación regional' }),
    __metadata("design:type", Date)
], RegionalDelegationDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id de la entidad delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "idGeographicZona", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegado regional de la delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "regionalDelegate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Domicilio de la oficina de la delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "officeAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de la zona delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "keyZone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'iva de la delegación regional' }),
    __metadata("design:type", Number)
], RegionalDelegationDto.prototype, "iva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad de la zona delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de estado de la zona delegación regional' }),
    __metadata("design:type", String)
], RegionalDelegationDto.prototype, "keyState", void 0);
exports.RegionalDelegationDto = RegionalDelegationDto;
//# sourceMappingURL=regional-delegation.dto.js.map