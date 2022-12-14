import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { DelegationStateEntity } from './entities/delegation-state.entity';
import { DelegationStateDto } from './dto/create-delegation-state.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DelegationStateService {
    private delegationStateRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(delegationStateRepository: Repository<DelegationStateEntity>, logger: Logger, counter: Counter<string>);
    createDelegationState(delegationStateDto: DelegationStateDto): Promise<DelegationStateDto & DelegationStateEntity>;
    getAllDelegationStates({ inicio, pageSize }: PaginationDto): Promise<{
        data: DelegationStateEntity[];
        count: number;
    }>;
    getDelegationStateById(id: number): Promise<DelegationStateEntity>;
    updateDelegationState(id: number, delegationStateDto: DelegationStateDto): Promise<false | DelegationStateEntity>;
    deleteDelegationState(id: number): Promise<false | DelegationStateEntity>;
}
