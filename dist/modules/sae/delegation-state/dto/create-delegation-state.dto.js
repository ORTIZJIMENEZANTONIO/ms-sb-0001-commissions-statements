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
exports.DelegationStateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DelegationStateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la delegación estado' }),
    __metadata("design:type", Number)
], DelegationStateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'C+odigo del estado' }),
    __metadata("design:type", String)
], DelegationStateDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó la delegación estado' }),
    __metadata("design:type", String)
], DelegationStateDto.prototype, "userCreated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la delegación estado' }),
    __metadata("design:type", Date)
], DelegationStateDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación de la delegación estado' }),
    __metadata("design:type", String)
], DelegationStateDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación de la delegación estado' }),
    __metadata("design:type", Date)
], DelegationStateDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la delegación estado' }),
    __metadata("design:type", Number)
], DelegationStateDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de la delegación estado' }),
    __metadata("design:type", Number)
], DelegationStateDto.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de contrato de la delegación estado' }),
    __metadata("design:type", Number)
], DelegationStateDto.prototype, "status", void 0);
exports.DelegationStateDto = DelegationStateDto;
//# sourceMappingURL=create-delegation-state.dto.js.map