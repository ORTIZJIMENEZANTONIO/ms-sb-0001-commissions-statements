import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { OriginEntity } from './entities/origin.entity';
import { OriginDto } from './dto/origin.dto';
export declare class OriginService {
    private originRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(originRepository: Repository<OriginEntity>, logger: Logger, counter: Counter<string>);
    createOrigin(originDto: OriginDto): Promise<OriginDto & OriginEntity>;
    getAllOrigins({ inicio, pageSize }: PaginationDto): Promise<{
        data: OriginEntity[];
        count: number;
    }>;
    getOriginById(id: number): Promise<OriginEntity>;
    updateOrigin(id: number, originDto: OriginDto): Promise<false | OriginEntity>;
    deleteOrigin(id: number): Promise<import("typeorm").DeleteResult>;
}
