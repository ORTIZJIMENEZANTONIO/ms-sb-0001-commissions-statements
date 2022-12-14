import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { NormsDto } from './dto/norms.dto';
import { NormsEntity } from './entity/norms.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class NormsService {
    private normsEntity;
    private readonly logger;
    counter: Counter<string>;
    constructor(normsEntity: Repository<NormsEntity>, logger: Logger, counter: Counter<string>);
    getAllNorms({ inicio, pageSize }: PaginationDto): Promise<{
        data: NormsEntity[];
        count: number;
    }>;
    createNorm(normsDto: NormsDto): Promise<NormsDto & NormsEntity>;
    findNorm(id: number): Promise<NormsEntity>;
    updateNorm(normsDto: NormsDto): Promise<false | NormsEntity>;
    deleteNorm(id: number): Promise<import("typeorm").DeleteResult>;
}
