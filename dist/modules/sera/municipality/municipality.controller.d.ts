import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MunicipalityDTO } from './dto/municipality.dto';
import { MunicipalityService } from './municipality.service';
export declare class MunicipalityController {
    private readonly municipalityService;
    constructor(municipalityService: MunicipalityService);
    getAllMunicipalitys(pagination: PaginationDto): Promise<{
        data: import("./entity/municipality.entity").MunicipalityEntity[];
        count: number;
    }>;
    getMunicipalityById(id: number): Promise<MunicipalityDTO>;
    createMunicipality(municipalityDTO: MunicipalityDTO): Promise<(MunicipalityDTO & import("./entity/municipality.entity").MunicipalityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateMunicipality(municipalityDTO: MunicipalityDTO): Promise<any>;
    deleteMunicipality(id_municipality: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
