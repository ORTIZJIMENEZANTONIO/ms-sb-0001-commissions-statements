import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSituacionDTO } from './dto/good-situacion.dto';
import { GoodSituacionService } from './good-situacion.service';
export declare class GoodSituacionController {
    private readonly goodSituacionService;
    constructor(goodSituacionService: GoodSituacionService);
    getAllGoodSituacions(pagination: PaginationDto): Promise<{
        data: import("./entity/good-situacion.entity").GoodSituacionEntity[];
        count: number;
    }>;
    getGoodSituacionById(id: number): Promise<GoodSituacionDTO>;
    createGoodSituacion(goodSituacionDTO: GoodSituacionDTO): Promise<(GoodSituacionDTO & import("./entity/good-situacion.entity").GoodSituacionEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateGoodSituacion(goodSituacionDTO: GoodSituacionDTO): Promise<any>;
    deleteGoodSituacion(id_goodSituacion: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
