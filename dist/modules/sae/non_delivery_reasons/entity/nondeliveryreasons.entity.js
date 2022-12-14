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
exports.NonDeliveryReasonsEntity = void 0;
const typeorm_1 = require("typeorm");
let NonDeliveryReasonsEntity = class NonDeliveryReasonsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id_motivo" }),
    __metadata("design:type", Number)
], NonDeliveryReasonsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tipo_motivo", length: 50 }),
    __metadata("design:type", Number)
], NonDeliveryReasonsEntity.prototype, "reasonType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tipo_evento", length: 50 }),
    __metadata("design:type", String)
], NonDeliveryReasonsEntity.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "desc_motivo", length: 100 }),
    __metadata("design:type", String)
], NonDeliveryReasonsEntity.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_creacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], NonDeliveryReasonsEntity.prototype, "userCreation", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario_modificacion", length: 100, nullable: false }),
    __metadata("design:type", String)
], NonDeliveryReasonsEntity.prototype, "userModification", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], NonDeliveryReasonsEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha_modificacion", default: () => "CURRENT_TIMESTAMP", nullable: false }),
    __metadata("design:type", Date)
], NonDeliveryReasonsEntity.prototype, "modificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], NonDeliveryReasonsEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "estatus" }),
    __metadata("design:type", Number)
], NonDeliveryReasonsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tipo_usuario", length: 10 }),
    __metadata("design:type", String)
], NonDeliveryReasonsEntity.prototype, "userType", void 0);
NonDeliveryReasonsEntity = __decorate([
    (0, typeorm_1.Entity)("cat_motivos_no_entrega", { schema: "sae_nsbdb" })
], NonDeliveryReasonsEntity);
exports.NonDeliveryReasonsEntity = NonDeliveryReasonsEntity;
//# sourceMappingURL=nondeliveryreasons.entity.js.map