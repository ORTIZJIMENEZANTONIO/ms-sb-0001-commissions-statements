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
exports.ChatClarificationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ChatClarificationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intedificador de solicitud por ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador estatus ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "idEstatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Captura de usuario' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "userCapture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Área de captura del usuario' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "areaUserCapture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave de oficio del SAT' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "satKeyPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'No. de registro ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "registryNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador de tipo de aclaración ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "idClarificationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Solicitud de sae' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "saeRequest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de solicitud ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], ChatClarificationDto.prototype, "requestDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Correo web' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "emailWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aclaración SAT' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "satClarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de aclaración ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], ChatClarificationDto.prototype, "clarificationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave única del SAT' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "satUniqueKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Entidad transferente del SAT ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "satTransfererEntity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Entidad transferente del SAT ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "referralNoteNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'XML oficio de aclaración' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "xmlPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave oficio de aclarción' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "keyClarificationPaper", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de aclaración ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "idClarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'proceso de aclarción' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "process", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador del bien ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "idProperty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de oficio' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "paperType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Origen de aclaración' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "clarificationOrigin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario remitente' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "senderUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre remitente' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "senderName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre destinatario' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "recipientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ciudad' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creó' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "creationUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], ChatClarificationDto.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que realizó modificación' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "editionUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificación ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], ChatClarificationDto.prototype, "editionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'version ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador solicitud inter ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "idRequestIner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mensaje de error' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus de aclaracion' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "clarificationStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clave única' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "keyUnique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'XML respuesta de oficio de aclaración' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "xmlPaperReponse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mensaje de interconexion' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "messageInterconnection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador notificación ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "idClarificationNotification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de documento de respuesta' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "idPaperResponse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de oficio ej. 2022-07-15T03:55:06.000Z' }),
    __metadata("design:type", Date)
], ChatClarificationDto.prototype, "paperDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mensaje de interconexion' }),
    __metadata("design:type", String)
], ChatClarificationDto.prototype, "folioClarification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'identificador de flujo inter ej. 1' }),
    __metadata("design:type", Number)
], ChatClarificationDto.prototype, "flowId", void 0);
exports.ChatClarificationDto = ChatClarificationDto;
//# sourceMappingURL=chat-clarification.dto.js.map