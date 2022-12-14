import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { ClaimConclusionDTO } from './dto/claim-conclusion.dto';
import { ClaimConclusionEntity } from './entity/claim-conclusion.entity';
export declare class ClaimConclusionService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ClaimConclusionEntity>, logger: Logger, counter: Counter<string>);
    getAllClaimConclusion({ inicio, pageSize }: PaginationDto): Promise<{
        data: ClaimConclusionEntity[];
        count: number;
    }>;
    getClaimConclusionById(id: number): Promise<ClaimConclusionDTO>;
    createClaimConclusion(claimConclusionDTO: ClaimConclusionDTO): Promise<ClaimConclusionDTO & ClaimConclusionEntity>;
    updateClaimConclusion(id: number, claimConclusionDTO: ClaimConclusionDTO): Promise<ClaimConclusionDTO | any>;
    deleteClaimConclusion(id: number): Promise<import("typeorm").DeleteResult>;
}
