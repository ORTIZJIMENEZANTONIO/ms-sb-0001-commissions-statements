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
exports.CityEntity = void 0;
const typeorm_1 = require("typeorm");
let CityEntity = class CityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_ciudad' }),
    __metadata("design:type", Number)
], CityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'nombre', length: 60 }),
    __metadata("design:type", String)
], CityEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'cve_entfed', length: 15 }),
    __metadata("design:type", String)
], CityEntity.prototype, "cve_entfed", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_delegacion" }),
    __metadata("design:type", Number)
], CityEntity.prototype, "no_delegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_subdelegacion" }),
    __metadata("design:type", Number)
], CityEntity.prototype, "no_subdelegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "leyenda_oficio", length: 150 }),
    __metadata("design:type", String)
], CityEntity.prototype, "leyenda_oficio", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], CityEntity.prototype, "no_registro", void 0);
CityEntity = __decorate([
    (0, typeorm_1.Entity)("cat_ciudades", { schema: "sera" })
], CityEntity);
exports.CityEntity = CityEntity;
//# sourceMappingURL=city.entity.js.map