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
exports.UpdateClarificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const clarification_dto_1 = require("./clarification.dto");
class UpdateClarificationDto extends (0, swagger_1.PartialType)(clarification_dto_1.ClarificationDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del asunto por ejemplo 1' }),
    __metadata("design:type", Number)
], UpdateClarificationDto.prototype, "idToUpdate", void 0);
exports.UpdateClarificationDto = UpdateClarificationDto;
//# sourceMappingURL=update-clarification.dto.js.map