import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { ClarificationEntity } from './entities/clarification.entity';
import { ClarificationDto } from './dto/clarification.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class ClarificationService {
    private clarificationRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(clarificationRepository: Repository<ClarificationEntity>, logger: Logger, counter: Counter<string>);
    createClarification(clarificationDto: ClarificationDto): Promise<ClarificationDto & ClarificationEntity>;
    getAllClarifications({ inicio, pageSize }: PaginationDto): Promise<{
        data: ClarificationEntity[];
        count: number;
    }>;
    getClarificationById(id: number): Promise<ClarificationEntity>;
    updateClarification(id: number, clarificationDto: ClarificationDto): Promise<false | ClarificationEntity>;
    deleteClarification(id: number): Promise<import("typeorm").DeleteResult>;
}
