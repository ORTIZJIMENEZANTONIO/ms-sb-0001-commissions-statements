import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSssubtypeDTO } from './dto/good-sssubtype.dto';
import { GoodSssubtypeService } from './good-sssubtype.service';
export declare class GoodSssubtypeController {
    private readonly goodSssubtypeService;
    constructor(goodSssubtypeService: GoodSssubtypeService);
    getAllGoodSssubtypes(pagination: PaginationDto): Promise<{
        data: import("./entity/good-sssubtype.entity").GoodSssubtypeEntity[];
        count: number;
    }>;
    getGoodSssubtypeById(id: number): Promise<GoodSssubtypeDTO>;
    createGoodSssubtype(goodSssubtypeDTO: GoodSssubtypeDTO): Promise<(GoodSssubtypeDTO & import("./entity/good-sssubtype.entity").GoodSssubtypeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateGoodSssubtype(goodSssubtypeDTO: GoodSssubtypeDTO): Promise<any>;
    deleteGoodSssubtype(id_goodSssubtype: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
