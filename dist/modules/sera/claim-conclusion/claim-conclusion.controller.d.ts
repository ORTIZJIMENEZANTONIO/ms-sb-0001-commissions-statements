import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ClaimConclusionService } from './claim-conclusion.service';
import { ClaimConclusionDTO } from './dto/claim-conclusion.dto';
export declare class ClaimConclusionController {
    private readonly claimConclusionService;
    constructor(claimConclusionService: ClaimConclusionService);
    getAllClaimConclusions(pagination: PaginationDto): Promise<{
        data: import("./entity/claim-conclusion.entity").ClaimConclusionEntity[];
        count: number;
    }>;
    getClaimConclusionById(id: number): Promise<ClaimConclusionDTO>;
    createClaimConclusion(claimConclusionDTO: ClaimConclusionDTO): Promise<(ClaimConclusionDTO & import("./entity/claim-conclusion.entity").ClaimConclusionEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateClaimConclusion(claimConclusionDTO: ClaimConclusionDTO): Promise<any>;
    deleteClaimConclusion(id_claimConclusion: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
