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
exports.CityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la ciudad' }),
    __metadata("design:type", String)
], CityDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador del estado' }),
    __metadata("design:type", String)
], CityDto.prototype, "idState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad (numbre)' }),
    __metadata("design:type", String)
], CityDto.prototype, "cityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el registro' }),
    __metadata("design:type", String)
], CityDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-14 22:55:06' }),
    __metadata("design:type", Date)
], CityDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    __metadata("design:type", String)
], CityDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-14 22:55:06' }),
    __metadata("design:type", Date)
], CityDto.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version de la deductiva ej. 1' }),
    __metadata("design:type", Number)
], CityDto.prototype, "version", void 0);
exports.CityDto = CityDto;
//# sourceMappingURL=city.dto.js.map