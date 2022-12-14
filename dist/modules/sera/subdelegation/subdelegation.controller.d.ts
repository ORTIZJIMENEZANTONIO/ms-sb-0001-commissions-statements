import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SubdelegationDTO } from './dto/subdelegation.dto';
import { SubdelegationService } from './subdelegation.service';
export declare class SubdelegationController {
    private readonly subdelegationService;
    constructor(subdelegationService: SubdelegationService);
    getAllSubdelegations(pagination: PaginationDto): Promise<{
        data: import("./entity/subdelegation.entity").SubdelegationEntity[];
        count: number;
    }>;
    getSubdelegationById(id: number): Promise<SubdelegationDTO>;
    createSubdelegation(subdelegationDTO: SubdelegationDTO): Promise<(SubdelegationDTO & import("./entity/subdelegation.entity").SubdelegationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateSubdelegation(subdelegationDTO: SubdelegationDTO): Promise<any>;
    deleteSubdelegation(id_subdelegation: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
