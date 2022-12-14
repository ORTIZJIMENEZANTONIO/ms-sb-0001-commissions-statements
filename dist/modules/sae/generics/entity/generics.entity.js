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
exports.genericsEntity = void 0;
const typeorm_1 = require("typeorm");
let genericsEntity = class genericsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("character varying", { name: "nombre_cat", length: 50, nullable: false }),
    __metadata("design:type", String)
], genericsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_clave", nullable: false }),
    __metadata("design:type", Number)
], genericsEntity.prototype, "keyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "descripcion_cat", length: 100 }),
    __metadata("design:type", String)
], genericsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100 }),
    __metadata("design:type", String)
], genericsEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], genericsEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100 }),
    __metadata("design:type", String)
], genericsEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], genericsEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], genericsEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "activo", length: 1 }),
    __metadata("design:type", String)
], genericsEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "editable", length: 1 }),
    __metadata("design:type", String)
], genericsEntity.prototype, "editable", void 0);
genericsEntity = __decorate([
    (0, typeorm_1.Entity)("cat_genericos", { schema: "sae_nsbdb" })
], genericsEntity);
exports.genericsEntity = genericsEntity;
//# sourceMappingURL=generics.entity.js.map