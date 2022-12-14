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
exports.OfficialLegendsEntity = void 0;
const typeorm_1 = require("typeorm");
let OfficialLegendsEntity = class OfficialLegendsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id_leyenda_oficial" }),
    __metadata("design:type", Number)
], OfficialLegendsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "leyenda", length: 4000 }),
    __metadata("design:type", String)
], OfficialLegendsEntity.prototype, "legend", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100 }),
    __metadata("design:type", String)
], OfficialLegendsEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], OfficialLegendsEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100 }),
    __metadata("design:type", String)
], OfficialLegendsEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], OfficialLegendsEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], OfficialLegendsEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "estatus" }),
    __metadata("design:type", Number)
], OfficialLegendsEntity.prototype, "status", void 0);
OfficialLegendsEntity = __decorate([
    (0, typeorm_1.Entity)("cat_leyendas_oficiales", { schema: "sae_nsbdb" })
], OfficialLegendsEntity);
exports.OfficialLegendsEntity = OfficialLegendsEntity;
//# sourceMappingURL=official_legends.entity.js.map