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
exports.SeriesEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let SeriesEntity = class SeriesEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de servicio ej ifai' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        length: 8,
        name: "cve_serie_ifai"
    }),
    __metadata("design:type", String)
], SeriesEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de trámite ej. se' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo_tramite",
        length: 2,
        nullable: true
    }),
    __metadata("design:type", String)
], SeriesEntity.prototype, "typeProcedure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del servicio' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion",
        length: 80,
        nullable: true
    }),
    __metadata("design:type", String)
], SeriesEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus del servicio ej. a' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_estatus",
        length: 1,
        nullable: false
    }),
    __metadata("design:type", String)
], SeriesEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], SeriesEntity.prototype, "registryNumber", void 0);
SeriesEntity = __decorate([
    (0, typeorm_1.Entity)("cat_serie_ifai", { schema: "sera" })
], SeriesEntity);
exports.SeriesEntity = SeriesEntity;
//# sourceMappingURL=series.entity.js.map