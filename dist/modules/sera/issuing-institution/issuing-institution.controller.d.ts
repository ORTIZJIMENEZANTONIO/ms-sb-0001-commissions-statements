import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IssuingInstitutionDTO } from './dto/issuing-institution.dto';
import { IssuingInstitutionService } from './issuing-institution.service';
export declare class IssuingInstitutionController {
    private readonly issuingInstitutionService;
    constructor(issuingInstitutionService: IssuingInstitutionService);
    getAllIssuingInstitutions(pagination: PaginationDto): Promise<{
        data: import("./entity/issuing-institution.entity").IssuingInstitutionEntity[];
        count: number;
    }>;
    getIssuingInstitutionById(id: number): Promise<IssuingInstitutionDTO>;
    createIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO): Promise<(IssuingInstitutionDTO & import("./entity/issuing-institution.entity").IssuingInstitutionEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO): Promise<any>;
    deleteIssuingInstitution(id_issuingInstitution: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
