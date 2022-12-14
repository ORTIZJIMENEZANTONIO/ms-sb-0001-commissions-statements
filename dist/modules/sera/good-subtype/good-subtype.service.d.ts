import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { GoodSubtypeDTO } from './dto/good-subtype.dto';
import { GoodSubtypeEntity } from './entity/good-subtype.entity';
export declare class GoodSubtypeService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<GoodSubtypeEntity>, logger: Logger, counter: Counter<string>);
    getAllGoodSubtype({ inicio, pageSize }: PaginationDto): Promise<{
        data: GoodSubtypeEntity[];
        count: number;
    }>;
    getGoodSubtypeById(id: number): Promise<GoodSubtypeDTO>;
    createGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO): Promise<GoodSubtypeDTO & GoodSubtypeEntity>;
    updateGoodSubtype(id: number, goodSubtypeDTO: GoodSubtypeDTO): Promise<GoodSubtypeDTO | any>;
    deleteGoodSubtype(id: number): Promise<import("typeorm").DeleteResult>;
}
