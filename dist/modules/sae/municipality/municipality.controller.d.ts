import { Logger } from 'winston';
import { MunicipalityService } from './municipality.service';
import { MunicipalityDto } from './dto/municipality.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class MunicipalityController {
    private readonly municipalityService;
    private readonly logger;
    constructor(municipalityService: MunicipalityService, logger: Logger);
    getAllMunicipalitys(paginationDto: PaginationDto): Promise<{
        data: import("./entity/municipality.entity").MunicipalityEntity[];
        count: number;
    }>;
    createMunicipality(municipalityDto: MunicipalityDto): Promise<(MunicipalityDto & import("./entity/municipality.entity").MunicipalityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findMunicipality(key: string): Promise<import("./entity/municipality.entity").MunicipalityEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateMunicipality(municipalityDto: any): Promise<import("./entity/municipality.entity").MunicipalityEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteMunicipality(key: string): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
