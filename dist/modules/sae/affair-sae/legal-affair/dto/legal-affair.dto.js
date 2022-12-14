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
exports.LegalAffairDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LegalAffairDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intedificador del asunto por ej. 1' }),
    __metadata("design:type", Number)
], LegalAffairDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del asunto' }),
    __metadata("design:type", String)
], LegalAffairDto.prototype, "legalAffair", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    __metadata("design:type", String)
], LegalAffairDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], LegalAffairDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    __metadata("design:type", String)
], LegalAffairDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], LegalAffairDto.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version ej. 1' }),
    __metadata("design:type", Number)
], LegalAffairDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'status ej. 1' }),
    __metadata("design:type", Number)
], LegalAffairDto.prototype, "status", void 0);
exports.LegalAffairDto = LegalAffairDto;
//# sourceMappingURL=legal-affair.dto.js.map