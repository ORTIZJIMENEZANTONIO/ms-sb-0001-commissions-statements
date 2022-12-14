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
exports.RevisionReasonEntity = void 0;
const typeorm_1 = require("typeorm");
let RevisionReasonEntity = class RevisionReasonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_motivo' }),
    __metadata("design:type", Number)
], RevisionReasonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'estatus_inicial', length: 3 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "estatus_inicial", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion_motivo', length: 80 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "descripcion_motivo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'tipo_bien', length: 1 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "tipo_bien", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'estatus_rev', length: 3 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "estatus_rev", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'area_responsable', length: 50 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "area_responsable", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'estatus_fin', length: 3 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "estatus_fin", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'pantalla', length: 80 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "pantalla", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "parametro", length: 30 }),
    __metadata("design:type", String)
], RevisionReasonEntity.prototype, "parametro", void 0);
RevisionReasonEntity = __decorate([
    (0, typeorm_1.Entity)("cat_motivosrev", { schema: "sera" })
], RevisionReasonEntity);
exports.RevisionReasonEntity = RevisionReasonEntity;
//# sourceMappingURL=revision-reason.entity.js.map