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
exports.UpdateDelegationStateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_delegation_state_dto_1 = require("./create-delegation-state.dto");
class UpdateDelegationStateDto extends (0, mapped_types_1.PartialType)(create_delegation_state_dto_1.DelegationStateDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de delegaciones estado a modificar' }),
    __metadata("design:type", Number)
], UpdateDelegationStateDto.prototype, "idToUpdate", void 0);
exports.UpdateDelegationStateDto = UpdateDelegationStateDto;
//# sourceMappingURL=update-delegation-state.dto.js.map