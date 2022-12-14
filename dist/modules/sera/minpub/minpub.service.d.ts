import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { MinpubDTO } from './dto/minpub.dto';
import { MinpubEntity } from './entity/minpub.entity';
export declare class MinpubService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<MinpubEntity>, logger: Logger, counter: Counter<string>);
    getAllMinpub({ inicio, pageSize }: PaginationDto): Promise<{
        data: MinpubEntity[];
        count: number;
    }>;
    getMinpubById(id: number): Promise<MinpubDTO>;
    createMinpub(minpubDTO: MinpubDTO): Promise<MinpubDTO & MinpubEntity>;
    updateMinpub(id: number, minpubDTO: MinpubDTO): Promise<MinpubDTO | any>;
    deleteMinpub(id: number): Promise<import("typeorm").DeleteResult>;
}
