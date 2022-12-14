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
exports.ServiceCatEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ServiceCatEntity = class ServiceCatEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de servicio' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        length: 30,
        name: "cve_servicio"
    }),
    __metadata("design:type", String)
], ServiceCatEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del servicio' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion",
        length: 200,
        nullable: false
    }),
    __metadata("design:type", String)
], ServiceCatEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Criterio de incosteabilidad ej. e' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "es_criterio_incosteabilidad",
        length: 1,
        nullable: true
    }),
    __metadata("design:type", String)
], ServiceCatEntity.prototype, "unaffordabilityCriterion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Subcuenta del servicio ej, subc' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "subcuenta",
        length: 4,
        nullable: false
    }),
    __metadata("design:type", String)
], ServiceCatEntity.prototype, "subaccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], ServiceCatEntity.prototype, "registryNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Costo o gasto ej. costo' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 5,
        name: "gasto_costo",
        nullable: true
    }),
    __metadata("design:type", String)
], ServiceCatEntity.prototype, "cost", void 0);
ServiceCatEntity = __decorate([
    (0, typeorm_1.Entity)("cat_servicios", { schema: "sera" })
], ServiceCatEntity);
exports.ServiceCatEntity = ServiceCatEntity;
//# sourceMappingURL=service-cat.entity.js.map