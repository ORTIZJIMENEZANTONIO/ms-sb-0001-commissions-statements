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
exports.ComerTPenaltyEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerTPenaltyEntity = class ComerTPenaltyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('numeric', { name: 'id_penalizacion' }),
    __metadata("design:type", Number)
], ComerTPenaltyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'desc_penalizacion',
        nullable: true,
        length: 150,
    }),
    __metadata("design:type", String)
], ComerTPenaltyEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'dias_penalizacion', nullable: true }),
    __metadata("design:type", Number)
], ComerTPenaltyEntity.prototype, "penaltyDays", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'proceso', nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerTPenaltyEntity.prototype, "process", void 0);
ComerTPenaltyEntity = __decorate([
    (0, typeorm_1.Entity)('comer_tpenaliza', { schema: 'sera' })
], ComerTPenaltyEntity);
exports.ComerTPenaltyEntity = ComerTPenaltyEntity;
//# sourceMappingURL=comer-tpenalty.entity.js.map