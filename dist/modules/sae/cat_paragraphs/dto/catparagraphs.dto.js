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
exports.CatParagraphsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CatParagraphsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha creacion' }),
    __metadata("design:type", Date)
], CatParagraphsDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha modificacion' }),
    __metadata("design:type", Date)
], CatParagraphsDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario creacion' }),
    __metadata("design:type", String)
], CatParagraphsDto.prototype, "userCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario modificacion' }),
    __metadata("design:type", String)
], CatParagraphsDto.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version' }),
    __metadata("design:type", Number)
], CatParagraphsDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'parrafo' }),
    __metadata("design:type", String)
], CatParagraphsDto.prototype, "paragraph", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'nombre_reporte' }),
    __metadata("design:type", String)
], CatParagraphsDto.prototype, "reportName", void 0);
exports.CatParagraphsDto = CatParagraphsDto;
//# sourceMappingURL=catparagraphs.dto.js.map