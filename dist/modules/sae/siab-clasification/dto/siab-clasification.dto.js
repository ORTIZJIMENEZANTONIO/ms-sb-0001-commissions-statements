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
exports.SiabClasificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SiabClasificationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador ej 1.' }),
    __metadata("design:type", Number)
], SiabClasificationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de tipo ej .1' }),
    __metadata("design:type", Number)
], SiabClasificationDto.prototype, "typeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del tipo' }),
    __metadata("design:type", String)
], SiabClasificationDto.prototype, "typeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de subtipo ej .1' }),
    __metadata("design:type", Number)
], SiabClasificationDto.prototype, "subtypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del subtipo' }),
    __metadata("design:type", String)
], SiabClasificationDto.prototype, "subtypeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de ssubtipo ej .1' }),
    __metadata("design:type", Number)
], SiabClasificationDto.prototype, "ssubtypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del ssutipo' }),
    __metadata("design:type", String)
], SiabClasificationDto.prototype, "ssubtypeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de sssubtipo ej .1' }),
    __metadata("design:type", Number)
], SiabClasificationDto.prototype, "sssubtypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del sssubtipo' }),
    __metadata("design:type", String)
], SiabClasificationDto.prototype, "sssubtypeDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    __metadata("design:type", String)
], SiabClasificationDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    __metadata("design:type", Date)
], SiabClasificationDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    __metadata("design:type", String)
], SiabClasificationDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    __metadata("design:type", Date)
], SiabClasificationDto.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva ej. 1' }),
    __metadata("design:type", Number)
], SiabClasificationDto.prototype, "version", void 0);
exports.SiabClasificationDto = SiabClasificationDto;
//# sourceMappingURL=siab-clasification.dto.js.map