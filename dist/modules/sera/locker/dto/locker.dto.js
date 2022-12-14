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
exports.LockerDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class LockerDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CVE del casillero' }),
    __metadata("design:type", String)
], LockerDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de bateria' }),
    __metadata("design:type", Number)
], LockerDTO.prototype, "no_bateria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de estante' }),
    __metadata("design:type", Number)
], LockerDTO.prototype, "no_estante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de casillero' }),
    __metadata("design:type", Number)
], LockerDTO.prototype, "no_casillero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], LockerDTO.prototype, "estatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], LockerDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro' }),
    __metadata("design:type", Number)
], LockerDTO.prototype, "no_registro", void 0);
exports.LockerDTO = LockerDTO;
//# sourceMappingURL=locker.dto.js.map