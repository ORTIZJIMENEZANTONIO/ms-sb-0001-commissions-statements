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
exports.ResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la respuesta ej. 1' }),
    __metadata("design:type", Number)
], ResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la pregunta ej. 1' }),
    __metadata("design:type", Number)
], ResponseDto.prototype, "idQuestion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Texto de la respuesta' }),
    __metadata("design:type", String)
], ResponseDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Valor inicial ej. 1' }),
    __metadata("design:type", Number)
], ResponseDto.prototype, "startValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Valor final ej. 10' }),
    __metadata("design:type", Number)
], ResponseDto.prototype, "endValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    __metadata("design:type", Number)
], ResponseDto.prototype, "registerNumber", void 0);
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map