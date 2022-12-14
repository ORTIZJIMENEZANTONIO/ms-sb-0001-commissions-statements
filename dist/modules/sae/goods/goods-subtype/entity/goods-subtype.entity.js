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
exports.GoodsSubTypeEntity = void 0;
const typeorm_1 = require("typeorm");
let GoodsSubTypeEntity = class GoodsSubTypeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_subtipo_bien' }),
    __metadata("design:type", Number)
], GoodsSubTypeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'id_tipo_bien' }),
    __metadata("design:type", Number)
], GoodsSubTypeEntity.prototype, "id_tipo_bien", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre_subtipo_bien', length: 50 }),
    __metadata("design:type", Number)
], GoodsSubTypeEntity.prototype, "nombre_subtipo_bien", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_creacion', length: 100 }),
    __metadata("design:type", String)
], GoodsSubTypeEntity.prototype, "usuario_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], GoodsSubTypeEntity.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'usuario_modificacion', length: 100 }),
    __metadata("design:type", String)
], GoodsSubTypeEntity.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], GoodsSubTypeEntity.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_fotografias' }),
    __metadata("design:type", Number)
], GoodsSubTypeEntity.prototype, "no_fotografias", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "desc_fotografias", length: 500 }),
    __metadata("design:type", String)
], GoodsSubTypeEntity.prototype, "desc_fotografias", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], GoodsSubTypeEntity.prototype, "version", void 0);
GoodsSubTypeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_subtipo_bienes", { schema: "sae_nsbdb" })
], GoodsSubTypeEntity);
exports.GoodsSubTypeEntity = GoodsSubTypeEntity;
//# sourceMappingURL=goods-subtype.entity.js.map