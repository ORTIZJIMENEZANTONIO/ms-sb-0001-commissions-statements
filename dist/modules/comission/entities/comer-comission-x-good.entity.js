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
exports.ComerComissionxbGoodEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerComissionxbGoodEntity = class ComerComissionxbGoodEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_comcalculada",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "comCalculatedId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_evento",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "no_bien",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "goodNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "monto_comision", precision: 24, scale: 14 }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "comisionAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "lote", precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "lot", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cvman", length: 8 }),
    __metadata("design:type", String)
], ComerComissionxbGoodEntity.prototype, "cvMan", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "venta", precision: 19, scale: 2 }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "comentarios",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], ComerComissionxbGoodEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "seprocesa", nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerComissionxbGoodEntity.prototype, "itsProcessed", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "venta_tc",
        nullable: true,
        precision: 19,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerComissionxbGoodEntity.prototype, "tcSale", void 0);
ComerComissionxbGoodEntity = __decorate([
    (0, typeorm_1.Entity)("comer_comisionesxbien", { schema: "sera" })
], ComerComissionxbGoodEntity);
exports.ComerComissionxbGoodEntity = ComerComissionxbGoodEntity;
//# sourceMappingURL=comer-comission-x-good.entity.js.map