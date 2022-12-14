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
exports.PaymentsConceptEntity = void 0;
const typeorm_1 = require("typeorm");
let PaymentsConceptEntity = class PaymentsConceptEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'cve_concepto_pago' }),
    __metadata("design:type", Number)
], PaymentsConceptEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 100 }),
    __metadata("design:type", String)
], PaymentsConceptEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], PaymentsConceptEntity.prototype, "no_registro", void 0);
PaymentsConceptEntity = __decorate([
    (0, typeorm_1.Entity)("cat_concepto_pagos", { schema: "sera" })
], PaymentsConceptEntity);
exports.PaymentsConceptEntity = PaymentsConceptEntity;
//# sourceMappingURL=payments-concept.entity.js.map