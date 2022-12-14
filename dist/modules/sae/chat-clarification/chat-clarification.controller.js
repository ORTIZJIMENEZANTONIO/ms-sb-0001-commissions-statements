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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatClarificationController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const chat_clarification_service_1 = require("./chat-clarification.service");
const chat_clarification_dto_1 = require("./dto/chat-clarification.dto");
let ChatClarificationController = class ChatClarificationController {
    constructor(chatClarificationService, logger) {
        this.chatClarificationService = chatClarificationService;
        this.logger = logger;
    }
    async createChatClarification(chatClarificationDto) {
        const chatClarificationCreated = await this.chatClarificationService.createChatClarification(chatClarificationDto);
        return chatClarificationCreated
            ? chatClarificationCreated
            : { statusCode: 503, message: "This Chat Clarification was not created", error: "Create Error" };
    }
    async getAllChatClarifications(pagination) {
        return await this.chatClarificationService.getAllChatClarifications(pagination);
    }
    async getChatClarificationById(id) {
        const chatClarificationFound = await this.chatClarificationService.getChatClarificationById(id);
        return chatClarificationFound
            ? chatClarificationFound
            : { statusCode: 404, message: 'Chat Clarification not found', error: "Not found" };
    }
    async updateChatClarification(data) {
        const chatClarificationUpdated = await this.chatClarificationService.updateChatClarification(data.idToUpdate, data);
        return chatClarificationUpdated
            ? chatClarificationUpdated
            : { statusCode: 404, message: 'ChatClarification  not found', error: "Not found" };
    }
    async deleteChatClarification(id) {
        const { affected } = await this.chatClarificationService.deleteChatClarification(id);
        return affected == 0
            ? { statusCode: 404, message: 'Chat Clarification not found', error: "Not found" }
            : { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createChatClarification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_clarification_dto_1.ChatClarificationDto]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "createChatClarification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllChatClarifications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "getAllChatClarifications", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getChatClarificationById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "getChatClarificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateChatClarification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "updateChatClarification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteChatClarification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "deleteChatClarification", null);
ChatClarificationController = __decorate([
    (0, common_1.Controller)('chat-clarification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [chat_clarification_service_1.ChatClarificationService,
        winston_1.Logger])
], ChatClarificationController);
exports.ChatClarificationController = ChatClarificationController;
//# sourceMappingURL=chat-clarification.controller.js.map