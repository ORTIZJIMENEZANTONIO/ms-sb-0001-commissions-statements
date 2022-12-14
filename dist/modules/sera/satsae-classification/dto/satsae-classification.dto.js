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
exports.SatSaeClassificationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatSaeClassificationDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número identificador de ciudad' }),
    __metadata("design:type", Number)
], SatSaeClassificationDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "partida_desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de clasificacion de bienes' }),
    __metadata("design:type", Number)
], SatSaeClassificationDTO.prototype, "no_clasif_bien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion de tipo' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "tipo_desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Capítulo' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "capitulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "eon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion de capitulo' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "capitulo_desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "perecedero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "unidad_medida1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "unidad_medida2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "unidad_medida3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], SatSaeClassificationDTO.prototype, "transferible", void 0);
exports.SatSaeClassificationDTO = SatSaeClassificationDTO;
//# sourceMappingURL=satsae-classification.dto.js.map