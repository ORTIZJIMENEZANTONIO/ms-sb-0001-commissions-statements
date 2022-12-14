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
exports.ReportEntity = void 0;
const typeorm_1 = require("typeorm");
let ReportEntity = class ReportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_reportes' }),
    __metadata("design:type", Number)
], ReportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre_reporte', length: 200 }),
    __metadata("design:type", String)
], ReportEntity.prototype, "nombre_reporte", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'id_tipo_docto' }),
    __metadata("design:type", Number)
], ReportEntity.prototype, "id_tipo_docto", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: 'contenido' }),
    __metadata("design:type", Number)
], ReportEntity.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_creacion', length: 100 }),
    __metadata("design:type", String)
], ReportEntity.prototype, "usuario_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ReportEntity.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_modificacion', length: 100 }),
    __metadata("design:type", String)
], ReportEntity.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ReportEntity.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], ReportEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo_reporte', length: 20 }),
    __metadata("design:type", String)
], ReportEntity.prototype, "tipo_reporte", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombre_secuencia_folio", length: 30 }),
    __metadata("design:type", Number)
], ReportEntity.prototype, "nombre_secuencia_folio", void 0);
ReportEntity = __decorate([
    (0, typeorm_1.Entity)("cat_reportes", { schema: "sae_nsbdb" })
], ReportEntity);
exports.ReportEntity = ReportEntity;
//# sourceMappingURL=report.entity.js.map