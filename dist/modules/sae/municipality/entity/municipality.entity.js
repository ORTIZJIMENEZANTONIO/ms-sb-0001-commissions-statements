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
exports.MunicipalityEntity = void 0;
const typeorm_1 = require("typeorm");
let MunicipalityEntity = class MunicipalityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("character varying", { name: "cve_municipio", length: 30, nullable: false }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cve_entidad", length: 30, nullable: false }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "entity", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombre_municipio", length: 60 }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "municipalityName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], MunicipalityEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], MunicipalityEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], MunicipalityEntity.prototype, "version", void 0);
MunicipalityEntity = __decorate([
    (0, typeorm_1.Entity)("cat_municipio", { schema: "sae_nsbdb" })
], MunicipalityEntity);
exports.MunicipalityEntity = MunicipalityEntity;
//# sourceMappingURL=municipality.entity.js.map