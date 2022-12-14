import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSubtypeDTO } from './dto/good-subtype.dto';
import { GoodSubtypeService } from './good-subtype.service';
export declare class GoodSubtypeController {
    private readonly goodSubtypeService;
    constructor(goodSubtypeService: GoodSubtypeService);
    getAllGoodSubtypes(pagination: PaginationDto): Promise<{
        data: import("./entity/good-subtype.entity").GoodSubtypeEntity[];
        count: number;
    }>;
    getGoodSubtypeById(id: number): Promise<GoodSubtypeDTO>;
    createGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO): Promise<(GoodSubtypeDTO & import("./entity/good-subtype.entity").GoodSubtypeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO): Promise<any>;
    deleteGoodSubtype(id_goodSubtype: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
