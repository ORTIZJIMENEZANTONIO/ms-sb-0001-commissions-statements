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
exports.IndicatorDeadlinesEntity = void 0;
const typeorm_1 = require("typeorm");
let IndicatorDeadlinesEntity = class IndicatorDeadlinesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_plazo_indicador' }),
    __metadata("design:type", Number)
], IndicatorDeadlinesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'indicador', length: 200 }),
    __metadata("design:type", String)
], IndicatorDeadlinesEntity.prototype, "indicador", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'formula', length: 300 }),
    __metadata("design:type", String)
], IndicatorDeadlinesEntity.prototype, "formula", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'plazo' }),
    __metadata("design:type", Number)
], IndicatorDeadlinesEntity.prototype, "plazo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_creacion', length: 100 }),
    __metadata("design:type", String)
], IndicatorDeadlinesEntity.prototype, "usuario_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], IndicatorDeadlinesEntity.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_modificacion', length: 100 }),
    __metadata("design:type", String)
], IndicatorDeadlinesEntity.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], IndicatorDeadlinesEntity.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "estatus" }),
    __metadata("design:type", Number)
], IndicatorDeadlinesEntity.prototype, "estatus", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], IndicatorDeadlinesEntity.prototype, "version", void 0);
IndicatorDeadlinesEntity = __decorate([
    (0, typeorm_1.Entity)("cat_plazos_indicadores", { schema: "sae_nsbdb" })
], IndicatorDeadlinesEntity);
exports.IndicatorDeadlinesEntity = IndicatorDeadlinesEntity;
//# sourceMappingURL=indicator-deadlines.entity.js.map