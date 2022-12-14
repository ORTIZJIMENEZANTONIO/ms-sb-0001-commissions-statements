import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { RegionalDelegationEntity } from './entities/regional-delegation.entity';
import { RegionalDelegationDto } from './dto/regional-delegation.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class RegionalDelegationService {
    private regionalDelegationRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(regionalDelegationRepository: Repository<RegionalDelegationEntity>, logger: Logger, counter: Counter<string>);
    createRegionalDelegation(regionalDelegationDto: RegionalDelegationDto): Promise<RegionalDelegationDto & RegionalDelegationEntity>;
    getAllRegionalDelegations({ inicio, pageSize }: PaginationDto): Promise<{
        data: RegionalDelegationEntity[];
        count: number;
    }>;
    getRegionalDelegationById(id: number): Promise<RegionalDelegationEntity>;
    updateRegionalDelegation(id: number, RegionalDelegationDto: RegionalDelegationDto): Promise<false | RegionalDelegationEntity>;
    deleteRegionalDelegation(id: number): Promise<false | RegionalDelegationEntity>;
}
