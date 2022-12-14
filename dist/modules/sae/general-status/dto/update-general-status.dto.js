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
exports.UpdateGeneralStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const general_status_dto_1 = require("./general-status.dto");
class UpdateGeneralStatusDto extends (0, swagger_2.PartialType)(general_status_dto_1.GeneralStatusDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del estatus del bien material' }),
    __metadata("design:type", String)
], UpdateGeneralStatusDto.prototype, "statusGeneralToUpdate", void 0);
exports.UpdateGeneralStatusDto = UpdateGeneralStatusDto;
//# sourceMappingURL=update-general-status.dto.js.map