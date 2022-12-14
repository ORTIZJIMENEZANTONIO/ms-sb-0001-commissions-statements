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
exports.UpdateCoordinatingAuthorityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const coordinating_authority_dto_1 = require("./coordinating-authority.dto");
class UpdateCoordinatingAuthorityDto extends (0, swagger_1.PartialType)(coordinating_authority_dto_1.CoordinatingAuthorityDto) {
}
__decorate([
    (0, swagger_2.ApiProperty)({ example: "id ej. 1" }),
    __metadata("design:type", Number)
], UpdateCoordinatingAuthorityDto.prototype, "idToUpdate", void 0);
exports.UpdateCoordinatingAuthorityDto = UpdateCoordinatingAuthorityDto;
//# sourceMappingURL=update-coordinating-authority.dto.js.map