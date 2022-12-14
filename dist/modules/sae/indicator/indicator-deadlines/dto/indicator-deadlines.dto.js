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
exports.IndicatorDeadlinesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class IndicatorDeadlinesDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Indentificador plazo indicadores' }),
    __metadata("design:type", Number)
], IndicatorDeadlinesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'indicador' }),
    __metadata("design:type", String)
], IndicatorDeadlinesDTO.prototype, "indicador", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Plazo del indicador ' }),
    __metadata("design:type", Number)
], IndicatorDeadlinesDTO.prototype, "plazo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creara el registro en plazo indicadores' }),
    __metadata("design:type", String)
], IndicatorDeadlinesDTO.prototype, "usuario_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creacion del registro' }),
    __metadata("design:type", Date)
], IndicatorDeadlinesDTO.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que modifico el registro' }),
    __metadata("design:type", String)
], IndicatorDeadlinesDTO.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificacion del registro' }),
    __metadata("design:type", Date)
], IndicatorDeadlinesDTO.prototype, "fecha_modificacion", void 0);
exports.IndicatorDeadlinesDTO = IndicatorDeadlinesDTO;
//# sourceMappingURL=indicator-deadlines.dto.js.map