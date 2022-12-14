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
exports.ResponseRepuveEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ResponseRepuveEntity = class ResponseRepuveEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de la respuesta ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_res_repuve"
    }),
    __metadata("design:type", Number)
], ResponseRepuveEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción de la respuesta' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "descripcion",
        length: 40,
        nullable: false
    }),
    __metadata("design:type", String)
], ResponseRepuveEntity.prototype, "description", void 0);
ResponseRepuveEntity = __decorate([
    (0, typeorm_1.Entity)("cat_res_repuve", { schema: "sera" })
], ResponseRepuveEntity);
exports.ResponseRepuveEntity = ResponseRepuveEntity;
//# sourceMappingURL=response-repuve.entity.js.map