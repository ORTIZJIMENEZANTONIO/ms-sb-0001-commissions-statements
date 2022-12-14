import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PenaltyEntity } from './entity/penalty.entity';
import { PenaltyDTO } from './dto/penalty.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class PenaltyService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<PenaltyEntity>, logger: Logger, counter: Counter<string>);
    getAllPenalty({ inicio, pageSize }: PaginationDto): Promise<{
        data: PenaltyEntity[];
        count: number;
    }>;
    getPenaltyById(id: number): Promise<PenaltyDTO>;
    createPenalty(penaltyDTO: PenaltyDTO): Promise<PenaltyDTO & PenaltyEntity>;
    updatePenalty(id: number, penaltyDTO: PenaltyDTO): Promise<PenaltyDTO | any>;
    deletePenalty(id: number): Promise<import("typeorm").UpdateResult>;
}
