"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
}
exports.Message = Message;
Message.MAX_LENGTH = (field, len) => `La longitud de ${field} debe ser menor o igual a ${len} caracteres`;
Message.MIN_LENGTH = (field, len) => `La longitud de ${field} debe ser mayor a ${len} caracteres`;
Message.LENGTH = (field, len) => `La longitud de ${field} debe ser entre ${len.split(' ')[0]} y ${len.split(' ')[1]} caracteres`;
Message.MIN = (field, val) => `El valor mínimo permitido para ${field} es ${val}`;
Message.MAX = (field, val) => `El valor máximo permitido para ${field} es ${val}`;
Message.POSITIVE = (field) => `${field} debe ser un número positivo`;
Message.MAX_NUMBER = (field, val) => `El valor máximo permitido para ${field} es ${val}`;
Message.STRING = (field) => `${field} debe ser una cadena`;
Message.NUMBER = (field) => `${field} debe ser un número`;
Message.REQUIRED = (field) => `${field} es un campo requerido`;
Message.ALREADY_EXISTS = () => `Este objeto ya existe`;
Message.IsDate = (field) => `El valor para ${field} debe ser una instancia de fecha.`;
Message.DELETED = () => `Eliminado correctamente.`;
Message.UPDATED = () => `Actualizado correctamente.`;
Message.NOT_FOUND = () => `Este registro no existe.`;
//# sourceMappingURL=message.js.map