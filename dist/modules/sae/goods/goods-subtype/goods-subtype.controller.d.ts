import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodsSubTypeDTO } from './dto/goods-subtype.dto';
import { GoodsSubTypeEntity } from './entity/goods-subtype.entity';
import { GoodsSubtypeService } from './goods-subtype.service';
export declare class GoodsSubTypeController {
    private readonly goodsSubTypeService;
    private readonly logger;
    constructor(goodsSubTypeService: GoodsSubtypeService, logger: Logger);
    getAllGoodsSubTypes(pagination: PaginationDto): Promise<{
        data: GoodsSubTypeEntity[];
        count: number;
    }>;
    getGoodsSubTypeById(id: number): Promise<GoodsSubTypeEntity>;
    createGoodsSubType(goodsSubTypeDTO: GoodsSubTypeDTO): Promise<(GoodsSubTypeDTO & GoodsSubTypeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateGoodsSubType(goodsSubTypeDTO: GoodsSubTypeDTO): Promise<any>;
    deleteGoodsSubType(id_goodsSubType: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
