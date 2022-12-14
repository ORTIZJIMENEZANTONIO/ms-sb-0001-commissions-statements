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
exports.SiseProcessEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let SiseProcessEntity = class SiseProcessEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_proceso"
    }),
    __metadata("design:type", Number)
], SiseProcessEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        length: 50,
        name: "descripcion",
        nullable: true
    }),
    __metadata("design:type", String)
], SiseProcessEntity.prototype, "description", void 0);
SiseProcessEntity = __decorate([
    (0, typeorm_1.Entity)("cat_sise_proceso", { schema: "sera" })
], SiseProcessEntity);
exports.SiseProcessEntity = SiseProcessEntity;
//# sourceMappingURL=sise-process.entity.js.map