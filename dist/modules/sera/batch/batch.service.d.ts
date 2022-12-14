import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { BatchDTO } from './dto/batch.dto';
import { BatchEntity } from './entity/batch.entity';
export declare class BatchService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<BatchEntity>, logger: Logger, counter: Counter<string>);
    getAllBatch({ inicio, pageSize }: PaginationDto): Promise<{
        data: BatchEntity[];
        count: number;
    }>;
    getBatchById(id: number): Promise<BatchDTO>;
    createBatch(batchDTO: BatchDTO): Promise<BatchDTO & BatchEntity>;
    updateBatch(id: number, batchDTO: BatchDTO): Promise<BatchDTO | any>;
    deleteBatch(id: number): Promise<import("typeorm").DeleteResult>;
}
