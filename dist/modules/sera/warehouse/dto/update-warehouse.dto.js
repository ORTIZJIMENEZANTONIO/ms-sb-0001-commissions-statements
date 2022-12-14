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
exports.UpdateWarehouseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const warehouse_dto_1 = require("./warehouse.dto");
class UpdateWarehouseDto extends (0, swagger_1.PartialType)(warehouse_dto_1.WarehouseDto) {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: 'Identificador almacén a modificar ej. 1' }),
    __metadata("design:type", Number)
], UpdateWarehouseDto.prototype, "idToUpdate", void 0);
exports.UpdateWarehouseDto = UpdateWarehouseDto;
//# sourceMappingURL=update-warehouse.dto.js.map