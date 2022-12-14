import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LocalityDTO } from './dto/locality.dto';
import { LocalityService } from './locality.service';
export declare class LocalityController {
    private readonly localityService;
    constructor(localityService: LocalityService);
    getAllLocalitys(pagination: PaginationDto): Promise<{
        data: import("./entity/locality.entity").LocalityEntity[];
        count: number;
    }>;
    getLocalityById(id: number): Promise<LocalityDTO>;
    createLocality(localityDTO: LocalityDTO): Promise<(LocalityDTO & import("./entity/locality.entity").LocalityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateLocality(localityDTO: LocalityDTO): Promise<import("./entity/locality.entity").LocalityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteLocality(id_locality: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
