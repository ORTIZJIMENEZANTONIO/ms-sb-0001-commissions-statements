import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { OriginCisiEntity } from './entities/origin-cisi.entity';
import { OriginCisiDto } from './dto/origin-cisi.dto';
export declare class OriginCisiService {
    private originCisiRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(originCisiRepository: Repository<OriginCisiEntity>, logger: Logger, counter: Counter<string>);
    createOriginCisi(originCisiDto: OriginCisiDto): Promise<OriginCisiDto & OriginCisiEntity>;
    getAllOriginCisis({ inicio, pageSize }: PaginationDto): Promise<{
        data: OriginCisiEntity[];
        count: number;
    }>;
    getOriginCisiById(id: number): Promise<OriginCisiEntity>;
    updateOriginCisi(id: number, originCisiDto: OriginCisiDto): Promise<false | OriginCisiEntity>;
    deleteOriginCisi(id: number): Promise<import("typeorm").DeleteResult>;
}
