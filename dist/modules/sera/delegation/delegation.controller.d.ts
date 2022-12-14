import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DelegationService } from './delegation.service';
import { DelegationDTO } from './dto/delegation.dto';
export declare class DelegationController {
    private readonly delegationService;
    constructor(delegationService: DelegationService);
    getAllDelegations(pagination: PaginationDto): Promise<{
        data: import("./entity/delegation.entity").DelegationEntity[];
        count: number;
    }>;
    getDelegationById(id: number): Promise<DelegationDTO>;
    createDelegation(delegationDTO: DelegationDTO): Promise<(DelegationDTO & import("./entity/delegation.entity").DelegationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateDelegation(delegationDTO: DelegationDTO): Promise<any>;
    deleteDelegation(id_delegation: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
