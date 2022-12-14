import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { GoodTypeDTO } from './dto/good-type.dto';
import { GoodTypeEntity } from './entity/good-type.entity';
export declare class GoodTypeService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<GoodTypeEntity>, logger: Logger, counter: Counter<string>);
    getAllGoodType({ inicio, pageSize }: PaginationDto): Promise<{
        data: GoodTypeEntity[];
        count: number;
    }>;
    getGoodTypeById(id: number): Promise<GoodTypeDTO>;
    createGoodType(goodTypeDTO: GoodTypeDTO): Promise<GoodTypeDTO & GoodTypeEntity>;
    updateGoodType(id: number, goodTypeDTO: GoodTypeDTO): Promise<GoodTypeDTO | any>;
    deleteGoodType(id: number): Promise<import("typeorm").DeleteResult>;
}
