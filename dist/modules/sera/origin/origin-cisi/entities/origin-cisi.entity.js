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
exports.OriginCisiEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let OriginCisiEntity = class OriginCisiEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de procedencia' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_procedencia"
    }),
    __metadata("design:type", Number)
], OriginCisiEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave del transferente' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "detalle_procedencia",
        length: 40,
        nullable: false
    }),
    __metadata("design:type", String)
], OriginCisiEntity.prototype, "detail", void 0);
OriginCisiEntity = __decorate([
    (0, typeorm_1.Entity)("cat_procedencia_cisi", { schema: "sera" })
], OriginCisiEntity);
exports.OriginCisiEntity = OriginCisiEntity;
//# sourceMappingURL=origin-cisi.entity.js.map