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
exports.StateOfRepublicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StateOfRepublicDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del estado' }),
    __metadata("design:type", String)
], StateOfRepublicDto.prototype, "stateCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de la entidad del estado' }),
    __metadata("design:type", String)
], StateOfRepublicDto.prototype, "entityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó el estado' }),
    __metadata("design:type", String)
], StateOfRepublicDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación del estado' }),
    __metadata("design:type", Date)
], StateOfRepublicDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación del estado' }),
    __metadata("design:type", String)
], StateOfRepublicDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación del estado' }),
    __metadata("design:type", Date)
], StateOfRepublicDto.prototype, "modificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave del estado' }),
    __metadata("design:type", Number)
], StateOfRepublicDto.prototype, "keyState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Versión de estado' }),
    __metadata("design:type", Number)
], StateOfRepublicDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Zona horaria del estado' }),
    __metadata("design:type", String)
], StateOfRepublicDto.prototype, "stdTimezone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Versión de la zona horaria del estado' }),
    __metadata("design:type", String)
], StateOfRepublicDto.prototype, "verTimezone", void 0);
exports.StateOfRepublicDto = StateOfRepublicDto;
//# sourceMappingURL=state-of-republic.dto.js.map