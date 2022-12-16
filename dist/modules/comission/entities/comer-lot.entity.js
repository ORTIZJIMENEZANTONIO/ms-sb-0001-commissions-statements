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
exports.ComerLotEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerLotEntity = class ComerLotEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: "id_lote",
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id_estatusvta", length: 4 }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "statusVtaId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "id_evento", precision: 7, scale: 0 }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "lote_publico", precision: 8, scale: 0 }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "publicLot", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 1250,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "valor_base", precision: 33, scale: 2 }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "baseValue", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_transferente",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "transferenceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_cliente",
        nullable: true,
        precision: 7,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_avaluo_ref",
        nullable: true,
        precision: 11,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "appraisalPriceRef", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_garantia",
        nullable: true,
        precision: 11,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "warrantyPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_entrega",
        nullable: true,
    }),
    __metadata("design:type", Date)
], ComerLotEntity.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_final",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "finalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "referenciag",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "referenceG", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "referencial",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "referential", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "acumulado",
        nullable: true,
        precision: 15,
        scale: 2,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "accumulated", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "valido_sistema",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "systemValid", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "iva_lote",
        nullable: true,
        precision: 11,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "lotVat", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_app_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "amountAppVat", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_noapp_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "amountNoAppVat", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_app_iva",
        nullable: true,
        precision: 12,
        scale: 9,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "vatAppPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_noapp_iva",
        nullable: true,
        precision: 12,
        scale: 9,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "vatNoAppPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "coordinacion_reg",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "regCoordination", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "coordinador_reg",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "regCoordinator", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "dato_fisc_mand",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "fiscMandFact", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "ubicacion",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "ubication", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "anticipo",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "advance", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_sin_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "amountWithoutVat", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "nooficionotifica",
        nullable: true,
        precision: 6,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "notifyOfficeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "imprimenotifica",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "notifyPrint", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "idestatusvtant",
        nullable: true,
        length: 4,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "statusVtantId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "num_bienes",
        nullable: true,
        precision: 6,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "goodsNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "excede_falta",
        nullable: true,
        precision: 15,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "faultExceeds", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "esasignado",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "assignedEs", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "eschatarra",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "scrapEs", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "solicita", nullable: true, length: 60 }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_retenido",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "withheldAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_delegacion",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "delegationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "lote_origen",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "originLot", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "cubrelotes",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "lotCover", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "paleta",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "palette", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "garantia_asig",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "assignedWarranty", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "monto_liq",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "liqAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "fase", nullable: true, precision: 2, scale: 0 }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "phase", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_parcialidades",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "partialitiesNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "puntos_porcen",
        nullable: true,
        precision: 4,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "percentPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_anticipo",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerLotEntity.prototype, "advancePercent", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "a_iva", nullable: true, length: 2 }),
    __metadata("design:type", String)
], ComerLotEntity.prototype, "vatA", void 0);
ComerLotEntity = __decorate([
    (0, typeorm_1.Entity)("comer_lotes", { schema: "sera" })
], ComerLotEntity);
exports.ComerLotEntity = ComerLotEntity;
//# sourceMappingURL=comer-lot.entity.js.map