import { Logger } from 'winston';
import { DelegationStateService } from './delegation-state.service';
import { DelegationStateDto } from './dto/create-delegation-state.dto';
import { UpdateDelegationStateDto } from './dto/update-delegation-state.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DelegationStateController {
    private readonly delegationStateService;
    private readonly logger;
    constructor(delegationStateService: DelegationStateService, logger: Logger);
    createDelegationState(delegationStateDto: DelegationStateDto): Promise<(DelegationStateDto & import("./entities/delegation-state.entity").DelegationStateEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllDelegationStates({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/delegation-state.entity").DelegationStateEntity[];
        count: number;
    }>;
    getDelegationStateById(id: number): Promise<import("./entities/delegation-state.entity").DelegationStateEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateDelegationState(data: UpdateDelegationStateDto & DelegationStateDto): Promise<import("./entities/delegation-state.entity").DelegationStateEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteDelegationState(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
