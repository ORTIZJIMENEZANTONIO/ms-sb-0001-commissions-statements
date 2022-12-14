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
exports.UpdateHolidayDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const holiday_dto_1 = require("./holiday.dto");
const swagger_2 = require("@nestjs/swagger");
class UpdateHolidayDto extends (0, swagger_1.PartialType)(holiday_dto_1.HolidayDto) {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'Identificador del día festivo a modificar' }),
    __metadata("design:type", Number)
], UpdateHolidayDto.prototype, "idToUpdate", void 0);
exports.UpdateHolidayDto = UpdateHolidayDto;
//# sourceMappingURL=update-holiday.dt.js.map