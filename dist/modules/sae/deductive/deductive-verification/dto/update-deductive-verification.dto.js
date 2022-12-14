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
exports.UpdateDeductiveVerificationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_deductive_verification_dto_1 = require("./create-deductive-verification.dto");
class UpdateDeductiveVerificationDto extends (0, mapped_types_1.PartialType)(create_deductive_verification_dto_1.CreateDeductiveVerificationDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la verificación de la deductiva a modificar' }),
    __metadata("design:type", Number)
], UpdateDeductiveVerificationDto.prototype, "idToUpdate", void 0);
exports.UpdateDeductiveVerificationDto = UpdateDeductiveVerificationDto;
//# sourceMappingURL=update-deductive-verification.dto.js.map