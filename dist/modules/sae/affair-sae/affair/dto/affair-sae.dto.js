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
exports.AffairSaeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AffairSaeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intedificador del asunto por ej. 1' }),
    __metadata("design:type", Number)
], AffairSaeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del asunto' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "affair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Registro de bienes' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "propertyRecord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación' }),
    __metadata("design:type", Date)
], AffairSaeDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación' }),
    __metadata("design:type", Date)
], AffairSaeDto.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del usuario' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "versionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de volante' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "referralNoteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version ej. 1' }),
    __metadata("design:type", Number)
], AffairSaeDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'status ej. 1' }),
    __metadata("design:type", Number)
], AffairSaeDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Proceso detonante' }),
    __metadata("design:type", String)
], AffairSaeDto.prototype, "detonationProcess", void 0);
exports.AffairSaeDto = AffairSaeDto;
//# sourceMappingURL=affair-sae.dto.js.map