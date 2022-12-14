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
exports.BatchEntity = void 0;
const typeorm_1 = require("typeorm");
let BatchEntity = class BatchEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_lote' }),
    __metadata("design:type", Number)
], BatchEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_almacen' }),
    __metadata("design:type", Number)
], BatchEntity.prototype, "no_almacen", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_registro' }),
    __metadata("design:type", Number)
], BatchEntity.prototype, "no_registro", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "descripcion", length: 30 }),
    __metadata("design:type", String)
], BatchEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "estatus", length: 1 }),
    __metadata("design:type", String)
], BatchEntity.prototype, "estatus", void 0);
BatchEntity = __decorate([
    (0, typeorm_1.Entity)("cat_lotes", { schema: "sera" })
], BatchEntity);
exports.BatchEntity = BatchEntity;
//# sourceMappingURL=batch.entity.js.map