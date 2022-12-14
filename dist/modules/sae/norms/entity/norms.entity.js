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
exports.NormsEntity = void 0;
const typeorm_1 = require("typeorm");
let NormsEntity = class NormsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id_norma" }),
    __metadata("design:type", Number)
], NormsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "norma", length: 30 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "norm", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "articulo", length: 30 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo" }),
    __metadata("design:type", Number)
], NormsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "caracteristicas", length: 4000 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "characteristics", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_publicacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], NormsEntity.prototype, "publicationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "mercancia_regula", length: 500 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "merchandise", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fundamento_juridico", length: 500 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "fundament", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "objetivo", length: 4000 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "objective", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "destino" }),
    __metadata("design:type", Number)
], NormsEntity.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "condicion" }),
    __metadata("design:type", Number)
], NormsEntity.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], NormsEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], NormsEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], NormsEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "estatus", length: 20 }),
    __metadata("design:type", String)
], NormsEntity.prototype, "status", void 0);
NormsEntity = __decorate([
    (0, typeorm_1.Entity)("cat_normas", { schema: "sae_nsbdb" })
], NormsEntity);
exports.NormsEntity = NormsEntity;
//# sourceMappingURL=norms.entity.js.map