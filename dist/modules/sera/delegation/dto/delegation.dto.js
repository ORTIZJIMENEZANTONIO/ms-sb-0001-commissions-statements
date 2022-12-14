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
exports.DelegationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class DelegationDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador delegacion' }),
    __metadata("design:type", Number)
], DelegationDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion de la delegacion' }),
    __metadata("design:type", String)
], DelegationDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DelegationDTO.prototype, "no_registro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CVE zona contrato' }),
    __metadata("design:type", Number)
], DelegationDTO.prototype, "cve_zona_contrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DelegationDTO.prototype, "dif_hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DelegationDTO.prototype, "etapa_edo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], DelegationDTO.prototype, "cve_zona_vigilancia", void 0);
exports.DelegationDTO = DelegationDTO;
//# sourceMappingURL=delegation.dto.js.map