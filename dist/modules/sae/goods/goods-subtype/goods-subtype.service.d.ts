import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { GoodsSubTypeDTO } from './dto/goods-subtype.dto';
import { GoodsSubTypeEntity } from './entity/goods-subtype.entity';
export declare class GoodsSubtypeService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<GoodsSubTypeEntity>, logger: Logger, counter: Counter<string>);
    getAllGoodsSubType({ inicio, pageSize }: PaginationDto): Promise<{
        data: GoodsSubTypeEntity[];
        count: number;
    }>;
    getGoodsSubTypeById(id: number): Promise<GoodsSubTypeEntity>;
    createGoodsSubType(goodsSubTypeDTO: GoodsSubTypeDTO): Promise<GoodsSubTypeDTO & GoodsSubTypeEntity>;
    updateGoodsSubType(id: number, goodsSubTypeDTO: GoodsSubTypeDTO): Promise<GoodsSubTypeEntity | any>;
    deleteGoodsSubType(id: number): Promise<import("typeorm").DeleteResult>;
}
