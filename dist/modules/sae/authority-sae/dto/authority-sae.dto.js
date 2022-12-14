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
exports.AuthoritySaeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthoritySaeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador por ejemplo 1' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de transferente ej. 1' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "idTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de emisora ej. 1' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "idIssuer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de ciudad' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "idCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de la autoridad' }),
    __metadata("design:type", String)
], AuthoritySaeDto.prototype, "authorityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código de estado' }),
    __metadata("design:type", String)
], AuthoritySaeDto.prototype, "codeState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    __metadata("design:type", String)
], AuthoritySaeDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    __metadata("design:type", Date)
], AuthoritySaeDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    __metadata("design:type", String)
], AuthoritySaeDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    __metadata("design:type", Date)
], AuthoritySaeDto.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version ej. 1' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de estado ej. 1' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave única ej. 1' }),
    __metadata("design:type", Number)
], AuthoritySaeDto.prototype, "keyUnique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus' }),
    __metadata("design:type", String)
], AuthoritySaeDto.prototype, "status", void 0);
exports.AuthoritySaeDto = AuthoritySaeDto;
//# sourceMappingURL=authority-sae.dto.js.map