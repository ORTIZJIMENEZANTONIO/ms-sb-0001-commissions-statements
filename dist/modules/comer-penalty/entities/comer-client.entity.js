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
exports.ComerClientEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ComerClientEntity = class ComerClientEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "No. Cliente" }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: "id_cliente",
    }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nom_razon", length: 100 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "reasonName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "rfc", length: 20 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "rfc", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_vendedor",
        nullable: true,
        precision: 4,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "sellerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "calle", nullable: true, length: 80 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "ciudad", nullable: true, length: 60 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "colonia", nullable: true, length: 60 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "colony", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "delegacion",
        nullable: true,
        length: 49,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "delegation", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cp", nullable: true, length: 6 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "pais", nullable: true, length: 22 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fax", nullable: true, length: 20 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "fax", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "telefono", nullable: true, length: 60 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "correoweb",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "mailWeb", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "estado", nullable: true, length: 31 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "curp", nullable: true, length: 20 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "curp", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "lista_negra",
        nullable: true,
        length: 2,
        default: () => "'N'",
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "blackList", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "apellido_paterno",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "paternalSurname", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "apellido_materno",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "maternalSurname", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "muni_id",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "municipalityId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "esta_id",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fecha_lista_negra", nullable: true }),
    __metadata("design:type", Date)
], ComerClientEntity.prototype, "blackListDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fecha_liberacion", nullable: true }),
    __metadata("design:type", Date)
], ComerClientEntity.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "id_penalizacion", nullable: true }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "penaltyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_persona",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "personType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "rfc_homologado",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "approvedRfc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usu_libera",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "userFree", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_libera", nullable: true }),
    __metadata("design:type", Date)
], ComerClientEntity.prototype, "freeDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "no_registro", nullable: true }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_act_economica",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "economicAgreementKey", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "tipo_identificacion",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "identificationType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "num_identificacion",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "identificationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_representante",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerClientEntity.prototype, "agentId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_exterior",
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "outsideNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_interior",
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "insisdeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "password", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "clabe_interbancaria",
        nullable: true,
        length: 18,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "interbankKey", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "banco", nullable: true, length: 3 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "sucursal", nullable: true, length: 10 }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cuenta_cheques",
        nullable: true,
        length: 11,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "checksAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_ini_penalizacion", nullable: true }),
    __metadata("design:type", Date)
], ComerClientEntity.prototype, "penaltyInitDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_fin_penalizacion", nullable: true }),
    __metadata("design:type", Date)
], ComerClientEntity.prototype, "penaltyEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usu_penaliza",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerClientEntity.prototype, "penalizeUser", void 0);
ComerClientEntity = __decorate([
    (0, typeorm_1.Entity)("comer_clientes", { schema: "sera" })
], ComerClientEntity);
exports.ComerClientEntity = ComerClientEntity;
//# sourceMappingURL=comer-client.entity.js.map