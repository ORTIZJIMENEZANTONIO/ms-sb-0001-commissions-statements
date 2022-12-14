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
exports.LockerEntity = void 0;
const typeorm_1 = require("typeorm");
let LockerEntity = class LockerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'character varying', name: 'cve_guardavalor' }),
    __metadata("design:type", String)
], LockerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_bateria' }),
    __metadata("design:type", Number)
], LockerEntity.prototype, "no_bateria", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: 'no_estante' }),
    __metadata("design:type", Number)
], LockerEntity.prototype, "no_estante", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_casillero" }),
    __metadata("design:type", Number)
], LockerEntity.prototype, "no_casillero", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "descripcion", length: 30 }),
    __metadata("design:type", String)
], LockerEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "estatus", length: 1 }),
    __metadata("design:type", String)
], LockerEntity.prototype, "estatus", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], LockerEntity.prototype, "no_registro", void 0);
LockerEntity = __decorate([
    (0, typeorm_1.Entity)("cat_casilleros", { schema: "sera" })
], LockerEntity);
exports.LockerEntity = LockerEntity;
//# sourceMappingURL=locker.entity.js.map