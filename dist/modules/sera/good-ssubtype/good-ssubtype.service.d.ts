import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { GoodSsubtypeEntity } from './entity/good-ssubtype.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSsubtypeDTO } from './dto/good-Ssubtype.dto';
export declare class GoodSsubtypeService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<GoodSsubtypeEntity>, logger: Logger, counter: Counter<string>);
    getAllGoodSsubtype({ inicio, pageSize }: PaginationDto): Promise<{
        data: GoodSsubtypeEntity[];
        count: number;
    }>;
    getGoodSsubtypeById(id: number): Promise<GoodSsubtypeDTO>;
    createGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO): Promise<any>;
    updateGoodSsubtype(id: number, goodSsubtypeDTO: GoodSsubtypeDTO): Promise<GoodSsubtypeDTO | any>;
    deleteGoodSsubtype(id: number): Promise<import("typeorm").DeleteResult>;
}
