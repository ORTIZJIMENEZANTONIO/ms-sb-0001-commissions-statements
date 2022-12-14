import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DetailDelegationService } from './detail-delegation.service';
import { DetailDelegationDTO } from './dto/detail-delegation.dto';
export declare class DetailDelegationController {
    private readonly detailDelegationService;
    constructor(detailDelegationService: DetailDelegationService);
    getAllDetailDelegations(pagination: PaginationDto): Promise<{
        data: import("./entity/detail-delegation.entity").DetailDelegationEntity[];
        count: number;
    }>;
    getDetailDelegationById(id: number): Promise<DetailDelegationDTO>;
    createDetailDelegation(detailDelegationDTO: DetailDelegationDTO): Promise<(DetailDelegationDTO & import("./entity/detail-delegation.entity").DetailDelegationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateDetailDelegation(detailDelegationDTO: DetailDelegationDTO): Promise<any>;
    deleteDetailDelegation(id_detailDelegation: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
