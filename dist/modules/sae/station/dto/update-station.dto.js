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
exports.UpdateStationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const station_dto_1 = require("./station.dto");
class UpdateStationDto extends (0, swagger_1.PartialType)(station_dto_1.StationDto) {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'Identificador de la emisora a modificar' }),
    __metadata("design:type", Number)
], UpdateStationDto.prototype, "stationIdToUpdate", void 0);
exports.UpdateStationDto = UpdateStationDto;
//# sourceMappingURL=update-station.dto.js.map