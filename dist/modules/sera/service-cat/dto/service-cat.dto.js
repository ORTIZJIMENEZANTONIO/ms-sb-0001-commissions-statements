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
exports.ServiceCatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ServiceCatDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de servicio' }),
    __metadata("design:type", String)
], ServiceCatDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del servicio' }),
    __metadata("design:type", String)
], ServiceCatDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Criteriode   de incosteabilidad ej. e' }),
    __metadata("design:type", String)
], ServiceCatDto.prototype, "unaffordabilityCriterion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Subcuenta del servicio ej, subc' }),
    __metadata("design:type", String)
], ServiceCatDto.prototype, "subaccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    __metadata("design:type", Number)
], ServiceCatDto.prototype, "registryNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Costo o gasto ej. costo' }),
    __metadata("design:type", String)
], ServiceCatDto.prototype, "cost", void 0);
exports.ServiceCatDto = ServiceCatDto;
//# sourceMappingURL=service-cat.dto.js.map