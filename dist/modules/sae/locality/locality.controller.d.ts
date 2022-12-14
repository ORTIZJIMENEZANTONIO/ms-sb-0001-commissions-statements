import { Logger } from 'winston';
import { LocalityService } from './locality.service';
import { LocalityDto } from './dto/locality.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class LocalityController {
    private readonly localityService;
    private readonly logger;
    constructor(localityService: LocalityService, logger: Logger);
    getAllLocalitys(pagination: PaginationDto): Promise<{
        data: import("./entity/locality.entity").localityEntity[];
        count: number;
    }>;
    createLocality(localityDto: LocalityDto): Promise<(LocalityDto & import("./entity/locality.entity").localityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findLocality(key: string): Promise<import("./entity/locality.entity").localityEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateLocality(GenericsDto: any): Promise<import("./entity/locality.entity").localityEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteLocality(key: string): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
