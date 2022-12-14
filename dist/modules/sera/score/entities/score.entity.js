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
exports.ScoreEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ScoreEntity = class ScoreEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de puntaje' }),
    (0, typeorm_1.PrimaryColumn)({
        type: "character varying",
        length: 2,
        name: "cve_puntuacion"
    }),
    __metadata("design:type", String)
], ScoreEntity.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rango inicial del puntaje ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "rango_inicial",
        nullable: false
    }),
    __metadata("design:type", Number)
], ScoreEntity.prototype, "initialRank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rango final del puntaje ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "rango_final",
        nullable: false
    }),
    __metadata("design:type", Number)
], ScoreEntity.prototype, "endRank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clasificación del puntaje' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "calificacion",
        length: 500,
        nullable: true
    }),
    __metadata("design:type", String)
], ScoreEntity.prototype, "clasification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], ScoreEntity.prototype, "registryNumber", void 0);
ScoreEntity = __decorate([
    (0, typeorm_1.Entity)("cat_puntuaciones", { schema: "sera" })
], ScoreEntity);
exports.ScoreEntity = ScoreEntity;
//# sourceMappingURL=score.entity.js.map