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
exports.HolidayDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class HolidayDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del día festivo' }),
    __metadata("design:type", Number)
], HolidayDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha del día festivo' }),
    __metadata("design:type", Date)
], HolidayDto.prototype, "holidayDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del día festivo' }),
    __metadata("design:type", String)
], HolidayDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el día festivo' }),
    __metadata("design:type", String)
], HolidayDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del día festivo' }),
    __metadata("design:type", Date)
], HolidayDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del día festivo' }),
    __metadata("design:type", String)
], HolidayDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del día festivo' }),
    __metadata("design:type", Date)
], HolidayDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Version del día festivo' }),
    __metadata("design:type", Number)
], HolidayDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus del día festivo' }),
    __metadata("design:type", Number)
], HolidayDto.prototype, "status", void 0);
exports.HolidayDto = HolidayDto;
//# sourceMappingURL=holiday.dto.js.map