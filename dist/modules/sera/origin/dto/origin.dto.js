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
exports.OriginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class OriginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de procedencia' }),
    __metadata("design:type", Number)
], OriginDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de transferente ej. 1' }),
    __metadata("design:type", Number)
], OriginDto.prototype, "idTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave del transferente' }),
    __metadata("design:type", String)
], OriginDto.prototype, "keyTransferer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción' }),
    __metadata("design:type", String)
], OriginDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo' }),
    __metadata("design:type", String)
], OriginDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dirección' }),
    __metadata("design:type", String)
], OriginDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad' }),
    __metadata("design:type", String)
], OriginDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. ciudad ej. 1' }),
    __metadata("design:type", Number)
], OriginDto.prototype, "idCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave Entidad' }),
    __metadata("design:type", String)
], OriginDto.prototype, "keyEntityFederative", void 0);
exports.OriginDto = OriginDto;
//# sourceMappingURL=origin.dto.js.map