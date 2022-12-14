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
exports.AffairTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AffairTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Código del asunto por ejemplo 1' }),
    __metadata("design:type", Number)
], AffairTypeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave relación bien' }),
    __metadata("design:type", String)
], AffairTypeDto.prototype, "relationPropertyKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de volante' }),
    __metadata("design:type", String)
], AffairTypeDto.prototype, "referralNoteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del usuario' }),
    __metadata("design:type", String)
], AffairTypeDto.prototype, "versionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Npumero de registro por ejemplo 1' }),
    __metadata("design:type", Number)
], AffairTypeDto.prototype, "idRegister", void 0);
exports.AffairTypeDto = AffairTypeDto;
//# sourceMappingURL=affair-type.dto.js.map