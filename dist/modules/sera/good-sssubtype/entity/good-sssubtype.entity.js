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
exports.GoodSssubtypeEntity = void 0;
const typeorm_1 = require("typeorm");
let GoodSssubtypeEntity = class GoodSssubtypeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'no_sssubtipo' }),
    __metadata("design:type", Number)
], GoodSssubtypeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'descripcion', length: 70 }),
    __metadata("design:type", String)
], GoodSssubtypeEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_ssubtipo" }),
    __metadata("design:type", Number)
], GoodSssubtypeEntity.prototype, "no_ssubtipo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_tipo" }),
    __metadata("design:type", Number)
], GoodSssubtypeEntity.prototype, "no_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "no_registro" }),
    __metadata("design:type", Number)
], GoodSssubtypeEntity.prototype, "no_registro", void 0);
GoodSssubtypeEntity = __decorate([
    (0, typeorm_1.Entity)("cat_sssubtipo_bien", { schema: "sera" })
], GoodSssubtypeEntity);
exports.GoodSssubtypeEntity = GoodSssubtypeEntity;
//# sourceMappingURL=good-sssubtype.entity.js.map