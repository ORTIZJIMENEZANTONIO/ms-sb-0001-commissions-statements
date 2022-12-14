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
exports.LocalityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LocalityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Entidad' }),
    __metadata("design:type", String)
], LocalityDto.prototype, "entityKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Municipio' }),
    __metadata("design:type", String)
], LocalityDto.prototype, "municipalityKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre localidad' }),
    __metadata("design:type", String)
], LocalityDto.prototype, "localityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ambito' }),
    __metadata("design:type", Number)
], LocalityDto.prototype, "ambitKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario creación' }),
    __metadata("design:type", String)
], LocalityDto.prototype, "userCreation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha modificación' }),
    __metadata("design:type", Date)
], LocalityDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario modificación' }),
    __metadata("design:type", String)
], LocalityDto.prototype, "userModification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha modificación' }),
    __metadata("design:type", Date)
], LocalityDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version' }),
    __metadata("design:type", Number)
], LocalityDto.prototype, "version", void 0);
exports.LocalityDto = LocalityDto;
//# sourceMappingURL=locality.dto.js.map