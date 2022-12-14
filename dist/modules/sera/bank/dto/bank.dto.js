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
exports.BankDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BankDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código del banco' }),
    __metadata("design:type", String)
], BankDto.prototype, "bankCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del banco' }),
    __metadata("design:type", String)
], BankDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    __metadata("design:type", Number)
], BankDto.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ifdsc' }),
    __metadata("design:type", String)
], BankDto.prototype, "ifdsc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de fecha ej. 1' }),
    __metadata("design:type", Number)
], BankDto.prototype, "dateType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código ej. 1' }),
    __metadata("design:type", Number)
], BankDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del proveedor ej. 1' }),
    __metadata("design:type", Number)
], BankDto.prototype, "idProvider", void 0);
exports.BankDto = BankDto;
//# sourceMappingURL=bank.dto.js.map