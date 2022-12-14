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
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'codigo_municipio' }),
    __metadata("design:type", Number)
], MunicipalityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 100 }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'cod_entfed', length: 15 }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "cod_entfed", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cod_marginalidad" }),
    __metadata("design:type", Number)
], MunicipalityEntity.prototype, "cod_marginalidad", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "riesgo", length: 2 }),
    __metadata("design:type", String)
], MunicipalityEntity.prototype, "riesgo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], MunicipalityEntity.prototype, "no_registro", void 0);
MunicipalityEntity = __decorate([
    (0, typeorm_1.Entity)("cat_municipios", { schema: "sera" })
], MunicipalityEntity);
exports.MunicipalityEntity = MunicipalityEntity;
//# sourceMappingURL=municipality.entity.js.map