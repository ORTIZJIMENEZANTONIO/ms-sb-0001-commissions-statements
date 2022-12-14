import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSsubtypeDTO } from './dto/good-Ssubtype.dto';
import { GoodSsubtypeService } from './good-ssubtype.service';
export declare class GoodSsubtypeController {
    private readonly goodSsubtypeService;
    constructor(goodSsubtypeService: GoodSsubtypeService);
    getAllGoodSsubtypes(pagination: PaginationDto): Promise<{
        data: import("./entity/good-ssubtype.entity").GoodSsubtypeEntity[];
        count: number;
    }>;
    getGoodSsubtypeById(id: number): Promise<GoodSsubtypeDTO>;
    createGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO): Promise<any>;
    updateGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO): Promise<any>;
    deleteGoodSsubtype(id_goodSsubtype: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
