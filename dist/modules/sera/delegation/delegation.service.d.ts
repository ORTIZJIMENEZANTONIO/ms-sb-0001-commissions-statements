import { Logger } from '@nestjs/common';
import { Counter } from "prom-client";
import { Repository } from 'typeorm';
import { DelegationDTO } from './dto/delegation.dto';
import { DelegationEntity } from './entity/delegation.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DelegationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<DelegationEntity>, logger: Logger, counter: Counter<string>);
    getAllDelegation({ inicio, pageSize }: PaginationDto): Promise<{
        data: DelegationEntity[];
        count: number;
    }>;
    getDelegationById(id: number): Promise<DelegationDTO>;
    createDelegation(delegationDTO: DelegationDTO): Promise<DelegationDTO & DelegationEntity>;
    updateDelegation(id: number, delegationDTO: DelegationDTO): Promise<DelegationDTO | any>;
    deleteDelegation(id: number): Promise<import("typeorm").DeleteResult>;
}
