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
exports.NormsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NormsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Norma' }),
    __metadata("design:type", String)
], NormsDto.prototype, "norm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Articulo' }),
    __metadata("design:type", String)
], NormsDto.prototype, "article", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo' }),
    __metadata("design:type", Number)
], NormsDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Caracteristicas' }),
    __metadata("design:type", String)
], NormsDto.prototype, "characteristics", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de publicacion' }),
    __metadata("design:type", Date)
], NormsDto.prototype, "publicationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mercancia regula' }),
    __metadata("design:type", String)
], NormsDto.prototype, "merchandise", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fundamento juridico' }),
    __metadata("design:type", String)
], NormsDto.prototype, "fundament", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Objetivo' }),
    __metadata("design:type", String)
], NormsDto.prototype, "objective", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Destino' }),
    __metadata("design:type", Number)
], NormsDto.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Condicion' }),
    __metadata("design:type", Number)
], NormsDto.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario creacion' }),
    __metadata("design:type", String)
], NormsDto.prototype, "userCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha creacion' }),
    __metadata("design:type", Date)
], NormsDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario modificacion' }),
    __metadata("design:type", String)
], NormsDto.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha modificacion' }),
    __metadata("design:type", Date)
], NormsDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version' }),
    __metadata("design:type", Number)
], NormsDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'estatus' }),
    __metadata("design:type", String)
], NormsDto.prototype, "status", void 0);
exports.NormsDto = NormsDto;
//# sourceMappingURL=norms.dto.js.map