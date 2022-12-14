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
exports.RegulatoryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegulatoryDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id del registro de la regulación' }),
    __metadata("design:type", Number)
], RegulatoryDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id de fracción' }),
    __metadata("design:type", Number)
], RegulatoryDTO.prototype, "id_fraccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'numero de regulación' }),
    __metadata("design:type", String)
], RegulatoryDTO.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'descripcion' }),
    __metadata("design:type", String)
], RegulatoryDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Validacion EF' }),
    __metadata("design:type", String)
], RegulatoryDTO.prototype, "validar_ef", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Validacion EC' }),
    __metadata("design:type", String)
], RegulatoryDTO.prototype, "validar_ec", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario encargado de la creacion' }),
    __metadata("design:type", String)
], RegulatoryDTO.prototype, "usuario_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación' }),
    __metadata("design:type", Date)
], RegulatoryDTO.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RegulatoryDTO.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación' }),
    __metadata("design:type", Date)
], RegulatoryDTO.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], RegulatoryDTO.prototype, "version", void 0);
exports.RegulatoryDTO = RegulatoryDTO;
//# sourceMappingURL=regulatory.dto.js.map