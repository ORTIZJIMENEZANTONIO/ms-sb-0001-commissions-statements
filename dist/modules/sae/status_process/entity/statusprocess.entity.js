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
exports.StatusProcessEntity = void 0;
const typeorm_1 = require("typeorm");
let StatusProcessEntity = class StatusProcessEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("character varying", { name: "estatus", length: 50, nullable: false }),
    __metadata("design:type", String)
], StatusProcessEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "prcoeso", length: 50 }),
    __metadata("design:type", String)
], StatusProcessEntity.prototype, "process", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "descripcion", length: 200 }),
    __metadata("design:type", String)
], StatusProcessEntity.prototype, "description", void 0);
StatusProcessEntity = __decorate([
    (0, typeorm_1.Entity)("cat_estatus_proceso", { schema: "sae_nsbdb" })
], StatusProcessEntity);
exports.StatusProcessEntity = StatusProcessEntity;
//# sourceMappingURL=statusprocess.entity.js.map