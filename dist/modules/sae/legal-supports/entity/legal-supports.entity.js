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
exports.LegalSupportsEntity = void 0;
const typeorm_1 = require("typeorm");
let LegalSupportsEntity = class LegalSupportsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'character varying', name: 'id_tipo_docto', length: 5, nullable: false }),
    __metadata("design:type", String)
], LegalSupportsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: 'sustento' }),
    __metadata("design:type", String)
], LegalSupportsEntity.prototype, "sustento", void 0);
LegalSupportsEntity = __decorate([
    (0, typeorm_1.Entity)("cat_sustentos_legales", { schema: "sae_nsbdb" })
], LegalSupportsEntity);
exports.LegalSupportsEntity = LegalSupportsEntity;
//# sourceMappingURL=legal-supports.entity.js.map