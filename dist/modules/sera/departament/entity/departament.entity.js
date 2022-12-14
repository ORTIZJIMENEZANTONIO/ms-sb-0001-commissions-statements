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
exports.DepartamentEntity = void 0;
const typeorm_1 = require("typeorm");
let DepartamentEntity = class DepartamentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_departamento' }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_delegacion' }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "no_delegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_subdelegacion' }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "no_subdelegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'dsarea', length: 30 }),
    __metadata("design:type", String)
], DepartamentEntity.prototype, "dsarea", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 200 }),
    __metadata("design:type", String)
], DepartamentEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "ultimo_oficio" }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "ultimo_oficio", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "no_registro", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "nivel" }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "depend" }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "depend", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "dep_delegacion" }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "dep_delegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "etapa_edo" }),
    __metadata("design:type", Number)
], DepartamentEntity.prototype, "etapa_edo", void 0);
DepartamentEntity = __decorate([
    (0, typeorm_1.Entity)("cat_departamentos", { schema: "sera" })
], DepartamentEntity);
exports.DepartamentEntity = DepartamentEntity;
//# sourceMappingURL=departament.entity.js.map