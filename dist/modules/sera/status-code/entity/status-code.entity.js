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
exports.StatusCodeEntity = void 0;
const typeorm_1 = require("typeorm");
let StatusCodeEntity = class StatusCodeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'character varying', name: 'cve_cod', length: 5 }),
    __metadata("design:type", String)
], StatusCodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'desc_codigo', length: 50 }),
    __metadata("design:type", String)
], StatusCodeEntity.prototype, "desc_codigo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "orden" }),
    __metadata("design:type", Number)
], StatusCodeEntity.prototype, "orden", void 0);
StatusCodeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_cod_estatus", { schema: "sera" })
], StatusCodeEntity);
exports.StatusCodeEntity = StatusCodeEntity;
//# sourceMappingURL=status-code.entity.js.map