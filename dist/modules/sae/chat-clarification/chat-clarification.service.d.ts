import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ChatClarificationEntity } from './entities/chat-clarification.entity';
import { ChatClarificationDto } from './dto/chat-clarification.dto';
export declare class ChatClarificationService {
    private chatClarificationRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(chatClarificationRepository: Repository<ChatClarificationEntity>, logger: Logger, counter: Counter<string>);
    createChatClarification(ChatClarificationDto: ChatClarificationDto): Promise<ChatClarificationDto & ChatClarificationEntity>;
    getAllChatClarifications({ inicio, pageSize }: PaginationDto): Promise<{
        data: ChatClarificationEntity[];
        count: number;
    }>;
    getChatClarificationById(id: number): Promise<ChatClarificationEntity>;
    updateChatClarification(id: number, chatClarificationDto: ChatClarificationDto): Promise<false | ChatClarificationEntity>;
    deleteChatClarification(id: number): Promise<import("typeorm").DeleteResult>;
}
