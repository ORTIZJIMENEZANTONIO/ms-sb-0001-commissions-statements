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
exports.ResponseEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ResponseEntity = class ResponseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la respuesta ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "no_respuesta"
    }),
    __metadata("design:type", Number)
], ResponseEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la pregunta ej. 1' }),
    (0, typeorm_1.Column)({
        type: "integer",
        name: "no_pregunta",
        nullable: false
    }),
    __metadata("design:type", Number)
], ResponseEntity.prototype, "idQuestion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Texto de la respuesta' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "texto_respuesta",
        length: 80,
        nullable: true
    }),
    __metadata("design:type", String)
], ResponseEntity.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Valor inicial ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "valor_inicial",
        nullable: true
    }),
    __metadata("design:type", Number)
], ResponseEntity.prototype, "startValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Valor final ej. 10' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "valor_final",
        nullable: true
    }),
    __metadata("design:type", Number)
], ResponseEntity.prototype, "endValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true
    }),
    __metadata("design:type", Number)
], ResponseEntity.prototype, "registerNumber", void 0);
ResponseEntity = __decorate([
    (0, typeorm_1.Entity)("cat_respuestas", { schema: "sera" })
], ResponseEntity);
exports.ResponseEntity = ResponseEntity;
//# sourceMappingURL=response.entity.js.map