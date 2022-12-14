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
exports.SeriesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SeriesDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de servicio ej ifai' }),
    __metadata("design:type", String)
], SeriesDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de trámite ej. se' }),
    __metadata("design:type", String)
], SeriesDto.prototype, "typeProcedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del servicio' }),
    __metadata("design:type", String)
], SeriesDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus del servicio ej. a' }),
    __metadata("design:type", String)
], SeriesDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    __metadata("design:type", Number)
], SeriesDto.prototype, "registryNumber", void 0);
exports.SeriesDto = SeriesDto;
//# sourceMappingURL=series.dto.js.map