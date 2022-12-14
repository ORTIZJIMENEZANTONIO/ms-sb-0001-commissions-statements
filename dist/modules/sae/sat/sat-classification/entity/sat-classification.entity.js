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
exports.SatClassificationEntity = void 0;
const typeorm_1 = require("typeorm");
let SatClassificationEntity = class SatClassificationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_clasificacion' }),
    __metadata("design:type", Number)
], SatClassificationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre_clasificacion', length: 30 }),
    __metadata("design:type", String)
], SatClassificationEntity.prototype, "nombre_clasificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_creacion', length: 100 }),
    __metadata("design:type", String)
], SatClassificationEntity.prototype, "usuario_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], SatClassificationEntity.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_modificacion', length: 100 }),
    __metadata("design:type", String)
], SatClassificationEntity.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], SatClassificationEntity.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], SatClassificationEntity.prototype, "version", void 0);
SatClassificationEntity = __decorate([
    (0, typeorm_1.Entity)("cat_sat_clasificacion", { schema: "sae_nsbdb" })
], SatClassificationEntity);
exports.SatClassificationEntity = SatClassificationEntity;
//# sourceMappingURL=sat-classification.entity.js.map