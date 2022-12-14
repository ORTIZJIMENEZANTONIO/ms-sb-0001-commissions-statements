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
exports.AuthorityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthorityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del transferente por ejemplo 1' }),
    __metadata("design:type", Number)
], AuthorityDto.prototype, "idTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de emisora ej. 1' }),
    __metadata("design:type", Number)
], AuthorityDto.prototype, "idIssuer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de autoridad ej. 1' }),
    __metadata("design:type", Number)
], AuthorityDto.prototype, "idAthority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de transferente amisor de la autoridad ej. 1' }),
    __metadata("design:type", Number)
], AuthorityDto.prototype, "idAuthorityIssuerTransferor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la autoridad' }),
    __metadata("design:type", String)
], AuthorityDto.prototype, "authorityDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de ciudad ej. 1' }),
    __metadata("design:type", Number)
], AuthorityDto.prototype, "idCity", void 0);
exports.AuthorityDto = AuthorityDto;
//# sourceMappingURL=authority.dto.js.map