import { Logger } from 'winston';
import { RegionalDelegationService } from './regional-delegation.service';
import { RegionalDelegationDto } from './dto/regional-delegation.dto';
import { UpdateRegionalDelegationDto } from './dto/update-regional-delegation.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class RegionalDelegationController {
    private readonly regionalDelegationService;
    private readonly logger;
    constructor(regionalDelegationService: RegionalDelegationService, logger: Logger);
    createRegionalDelegation(regionalDelegationDto: RegionalDelegationDto): Promise<(RegionalDelegationDto & import("./entities/regional-delegation.entity").RegionalDelegationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllRegionalDelegations({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/regional-delegation.entity").RegionalDelegationEntity[];
        count: number;
    }>;
    getRegionalDelegationById(id: number): Promise<import("./entities/regional-delegation.entity").RegionalDelegationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateRegionalDelegation(regionalData: UpdateRegionalDelegationDto & RegionalDelegationDto): Promise<import("./entities/regional-delegation.entity").RegionalDelegationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteRegionalDelegation(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
