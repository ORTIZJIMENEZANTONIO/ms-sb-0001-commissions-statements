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
exports.MediumPhotographyEntity = void 0;
const typeorm_1 = require("typeorm");
let MediumPhotographyEntity = class MediumPhotographyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id_medio' }),
    __metadata("design:type", Number)
], MediumPhotographyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'ruta', length: 40 }),
    __metadata("design:type", String)
], MediumPhotographyEntity.prototype, "ruta", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: 'estatus', length: 1 }),
    __metadata("design:type", String)
], MediumPhotographyEntity.prototype, "estatus", void 0);
MediumPhotographyEntity = __decorate([
    (0, typeorm_1.Entity)("cat_medio_fotografia", { schema: "sera" })
], MediumPhotographyEntity);
exports.MediumPhotographyEntity = MediumPhotographyEntity;
//# sourceMappingURL=medium-photography.entity.js.map