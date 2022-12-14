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
exports.DetailDelegationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class DetailDelegationDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador detalle delegacion' }),
    __metadata("design:type", Number)
], DetailDelegationDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre detalle delegacion' }),
    __metadata("design:type", String)
], DetailDelegationDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número delegacion' }),
    __metadata("design:type", Number)
], DetailDelegationDTO.prototype, "no_delegacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], DetailDelegationDTO.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], DetailDelegationDTO.prototype, "puesto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ubicacion' }),
    __metadata("design:type", String)
], DetailDelegationDTO.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], DetailDelegationDTO.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], DetailDelegationDTO.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DetailDelegationDTO.prototype, "tel1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DetailDelegationDTO.prototype, "tel2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DetailDelegationDTO.prototype, "tel3", void 0);
exports.DetailDelegationDTO = DetailDelegationDTO;
//# sourceMappingURL=detail-delegation.dto.js.map