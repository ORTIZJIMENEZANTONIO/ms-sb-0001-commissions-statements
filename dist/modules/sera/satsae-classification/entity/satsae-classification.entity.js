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
exports.SatSaeClassificationEntity = void 0;
const typeorm_1 = require("typeorm");
let SatSaeClassificationEntity = class SatSaeClassificationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_partida' }),
    __metadata("design:type", Number)
], SatSaeClassificationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'partida_desc', length: 900 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "partida_desc", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_clasif_bien' }),
    __metadata("design:type", Number)
], SatSaeClassificationEntity.prototype, "no_clasif_bien", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo', length: 30 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo_desc', length: 100 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "tipo_desc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'capitulo', length: 30 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "capitulo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'eon', length: 2 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "eon", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'capitulo_desc', length: 300 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "capitulo_desc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'perecedero', length: 30 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "perecedero", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'unidad_medida1', length: 10 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "unidad_medida1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'unidad_medida2', length: 10 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "unidad_medida2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'unidad_medida3', length: 10 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "unidad_medida3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "transferible", length: 100 }),
    __metadata("design:type", String)
], SatSaeClassificationEntity.prototype, "transferible", void 0);
SatSaeClassificationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_clasificacion_satsae", { schema: "sera" })
], SatSaeClassificationEntity);
exports.SatSaeClassificationEntity = SatSaeClassificationEntity;
//# sourceMappingURL=satsae-classification.entity.js.map