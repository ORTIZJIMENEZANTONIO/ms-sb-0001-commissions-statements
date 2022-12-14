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
exports.NonDeliveryReasonsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NonDeliveryReasonsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de motivo' }),
    __metadata("design:type", Number)
], NonDeliveryReasonsDto.prototype, "reasonType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de evento' }),
    __metadata("design:type", String)
], NonDeliveryReasonsDto.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion del motivo' }),
    __metadata("design:type", String)
], NonDeliveryReasonsDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario creacion' }),
    __metadata("design:type", String)
], NonDeliveryReasonsDto.prototype, "userCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario modificacion' }),
    __metadata("design:type", String)
], NonDeliveryReasonsDto.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha creacion' }),
    __metadata("design:type", Date)
], NonDeliveryReasonsDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha modificacion' }),
    __metadata("design:type", Date)
], NonDeliveryReasonsDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version' }),
    __metadata("design:type", Number)
], NonDeliveryReasonsDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'estatus' }),
    __metadata("design:type", Number)
], NonDeliveryReasonsDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de usuario' }),
    __metadata("design:type", String)
], NonDeliveryReasonsDto.prototype, "userType", void 0);
exports.NonDeliveryReasonsDto = NonDeliveryReasonsDto;
//# sourceMappingURL=nondeliveryreasons.dto.js.map