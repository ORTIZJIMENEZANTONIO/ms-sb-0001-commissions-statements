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
exports.ChatClarificationEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ChatClarificationEntity = class ChatClarificationEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intedificador de solicitud por ej. 1' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id_solicitud"
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador estatus ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_estatus",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "idEstatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Captura de usuario' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usrcaptura",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "userCapture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Área de captura del usuario' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "areausrcaptura",
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "areaUserCapture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de oficio del SAT' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "sat_cve_oficio",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "satKeyPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_registro",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "registryNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador de tipo de aclaración ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_tipoaclaracion",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "idClarificationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Solicitud de sae' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "sae_solicitud",
        length: 4000,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "saeRequest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de solicitud ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_solicitud",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ChatClarificationEntity.prototype, "requestDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Correo web' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "correo_web",
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "emailWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aclaración SAT' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "sat_aclara",
        length: 4000,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "satClarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de aclaración ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_aclara",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ChatClarificationEntity.prototype, "clarificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave única del SAT' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "sat_cve_unica",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "satUniqueKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Entidad transferente del SAT ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "sat_entidad_transferente",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "satTransfererEntity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Entidad transferente del SAT ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "no_volante",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "referralNoteNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'XML oficio de aclaración' }),
    (0, typeorm_1.Column)({
        type: "text",
        name: "xml_oficio_aclaracion",
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "xmlPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave oficio de aclarción' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "cve_oficio_aclaracion",
        length: 200,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "keyClarificationPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de aclaración ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_aclaracion",
        nullable: false,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "idClarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'proceso de aclarción' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "proceso",
        length: 30,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "process", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del bien ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_bien",
        nullable: false,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "idProperty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de oficio' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "tipo_oficio",
        length: 20,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "paperType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Origen de aclaración' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "origen_aclaracion",
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "clarificationOrigin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario remitente' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "usuario_remitente",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "senderUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre remitente' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "nombre_remitente",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "senderName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre destinatario' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "nombre_destinatario",
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "recipientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "ciudad",
        length: 60,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_creacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_creacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ChatClarificationEntity.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_modificacion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_modificacion",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ChatClarificationEntity.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "version",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador solicitud inter ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_solicitud_inter",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "idRequestIner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mensaje de error' }),
    (0, typeorm_1.Column)("character varying", {
        name: "mensaje_error",
        length: 1000,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de aclaracion' }),
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_aclaracion",
        length: 100,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "clarificationStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave única' }),
    (0, typeorm_1.Column)("character varying", {
        name: "cve_unica",
        length: 30,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "keyUnique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'XML respuesta de oficio de aclaración' }),
    (0, typeorm_1.Column)({
        type: "text",
        name: "xml_resp_oficio_aclaracion",
        nullable: true,
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "xmlPaperReponse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mensaje de interconexion' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "msg_interconexion",
        length: 1000,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "messageInterconnection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador notificación ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "id_recha_noti_aclara",
        nullable: true,
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "idClarificationNotification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de documento de respuesta' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "id_doc_resp",
        length: 20,
        nullable: true
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "idPaperResponse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de oficio ej. 2022-07-15T03:55:06.000Z' }),
    (0, typeorm_1.Column)({
        type: "timestamp without time zone",
        name: "fecha_oficio",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ChatClarificationEntity.prototype, "paperDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mensaje de interconexion' }),
    (0, typeorm_1.Column)({
        type: "character varying",
        name: "folio_aclaracion",
        length: 100,
        nullable: true,
        default: () => "ASD/SDAS/FD/102/2018"
    }),
    __metadata("design:type", String)
], ChatClarificationEntity.prototype, "folioClarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador de flujo inter ej. 1' }),
    (0, typeorm_1.Column)({
        type: "numeric",
        name: "flow_id",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Number)
], ChatClarificationEntity.prototype, "flowId", void 0);
ChatClarificationEntity = __decorate([
    (0, typeorm_1.Entity)("chat_aclaraciones", { schema: "sae_nsbdb" })
], ChatClarificationEntity);
exports.ChatClarificationEntity = ChatClarificationEntity;
//# sourceMappingURL=chat-clarification.entity.js.map