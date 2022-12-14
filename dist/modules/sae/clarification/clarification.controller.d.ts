import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ClarificationService } from './clarification.service';
import { ClarificationDto } from './dto/clarification.dto';
import { UpdateClarificationDto } from './dto/update-clarification.dto';
export declare class ClarificationController {
    private readonly clarificationService;
    private readonly logger;
    constructor(clarificationService: ClarificationService, logger: Logger);
    createClarification(clarificationDto: ClarificationDto): Promise<(ClarificationDto & import("./entities/clarification.entity").ClarificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllClarifications(pagination: PaginationDto): Promise<{
        data: import("./entities/clarification.entity").ClarificationEntity[];
        count: number;
    }>;
    getClarificationById(id: number): Promise<import("./entities/clarification.entity").ClarificationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateClarification(data: UpdateClarificationDto & ClarificationDto): Promise<import("./entities/clarification.entity").ClarificationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteClarification(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
