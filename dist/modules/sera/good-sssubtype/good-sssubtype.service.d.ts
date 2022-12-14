import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { GoodSssubtypeEntity } from './entity/good-sssubtype.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSssubtypeDTO } from './dto/good-sssubtype.dto';
export declare class GoodSssubtypeService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<GoodSssubtypeEntity>, logger: Logger, counter: Counter<string>);
    getAllGoodSssubtype({ inicio, pageSize }: PaginationDto): Promise<{
        data: GoodSssubtypeEntity[];
        count: number;
    }>;
    getGoodSssubtypeById(id: number): Promise<GoodSssubtypeDTO>;
    createGoodSssubtype(goodSssubtypeDTO: GoodSssubtypeDTO): Promise<GoodSssubtypeDTO & GoodSssubtypeEntity>;
    updateGoodSssubtype(id: number, goodSssubtypeDTO: GoodSssubtypeDTO): Promise<GoodSssubtypeDTO | any>;
    deleteGoodSssubtype(id: number): Promise<import("typeorm").DeleteResult>;
}
