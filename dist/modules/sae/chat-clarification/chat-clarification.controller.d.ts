import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ChatClarificationService } from './chat-clarification.service';
import { ChatClarificationDto } from './dto/chat-clarification.dto';
import { UpdateChatClarificationDto } from './dto/update-chat-clarification.dto';
export declare class ChatClarificationController {
    private readonly chatClarificationService;
    private readonly logger;
    constructor(chatClarificationService: ChatClarificationService, logger: Logger);
    createChatClarification(chatClarificationDto: ChatClarificationDto): Promise<(ChatClarificationDto & import("./entities/chat-clarification.entity").ChatClarificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllChatClarifications(pagination: PaginationDto): Promise<{
        data: import("./entities/chat-clarification.entity").ChatClarificationEntity[];
        count: number;
    }>;
    getChatClarificationById(id: number): Promise<import("./entities/chat-clarification.entity").ChatClarificationEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateChatClarification(data: UpdateChatClarificationDto & ChatClarificationDto): Promise<import("./entities/chat-clarification.entity").ChatClarificationEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteChatClarification(id: number): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
