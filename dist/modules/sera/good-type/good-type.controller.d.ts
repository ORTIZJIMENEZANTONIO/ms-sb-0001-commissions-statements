import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodTypeDTO } from './dto/good-type.dto';
import { GoodTypeService } from './good-type.service';
export declare class GoodTypeController {
    private readonly goodTypeService;
    constructor(goodTypeService: GoodTypeService);
    getAllGoodTypes(pagination: PaginationDto): Promise<{
        data: import("./entity/good-type.entity").GoodTypeEntity[];
        count: number;
    }>;
    getGoodTypeById(id: number): Promise<GoodTypeDTO>;
    createGoodType(goodTypeDTO: GoodTypeDTO): Promise<(GoodTypeDTO & import("./entity/good-type.entity").GoodTypeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateGoodType(goodTypeDTO: GoodTypeDTO): Promise<any>;
    deleteGoodType(id_goodType: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
