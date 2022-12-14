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
exports.ChatClarificationService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prom_client_1 = require("prom-client");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const chat_clarification_entity_1 = require("./entities/chat-clarification.entity");
let ChatClarificationService = class ChatClarificationService {
    constructor(chatClarificationRepository, logger, counter) {
        this.chatClarificationRepository = chatClarificationRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async createChatClarification(ChatClarificationDto) {
        return await this.chatClarificationRepository.save(ChatClarificationDto);
    }
    async getAllChatClarifications({ inicio, pageSize }) {
        const [result, total] = await this.chatClarificationRepository.findAndCount({
            skip: (inicio ? inicio - 1 : Number(0)),
            take: pageSize,
            order: { id: 'DESC' }
        });
        return {
            data: result,
            count: total
        };
    }
    async getChatClarificationById(id) {
        return await this.chatClarificationRepository.findOne({ where: { id: id } });
    }
    async updateChatClarification(id, chatClarificationDto) {
        const chatClarificationFound = await this.chatClarificationRepository.findOne({ where: { id: id } });
        if (chatClarificationFound) {
            this.chatClarificationRepository.merge(chatClarificationFound, chatClarificationDto);
            return await this.chatClarificationRepository.save(chatClarificationFound);
        }
        return false;
    }
    async deleteChatClarification(id) {
        return await this.chatClarificationRepository.delete(id);
    }
};
ChatClarificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_clarification_entity_1.ChatClarificationEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)('chat_clarification_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ChatClarificationService);
exports.ChatClarificationService = ChatClarificationService;
//# sourceMappingURL=chat-clarification.service.js.map