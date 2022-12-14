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
exports.QuestionEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let QuestionEntity = class QuestionEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del día festivo' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_pregunta"
    }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Texto de la pregunta' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "texto_pregunta",
        length: 500,
        nullable: false
    }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de la pregunta' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo_pregunta",
        length: 500,
        nullable: false
    }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Puntuación máxima ej. 10' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "puntuacion_maxima",
        nullable: true
    }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "maximumScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "registerNumber", void 0);
QuestionEntity = __decorate([
    (0, typeorm_1.Entity)("cat_preguntas", { schema: "sera" })
], QuestionEntity);
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=question.entity.js.map