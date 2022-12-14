import { Logger } from '@nestjs/common';
import { Counter } from "prom-client";
import { Repository } from 'typeorm';
import { DetailDelegationDTO } from './dto/detail-delegation.dto';
import { DetailDelegationEntity } from './entity/detail-delegation.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DetailDelegationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<DetailDelegationEntity>, logger: Logger, counter: Counter<string>);
    getAllDetailDelegation({ inicio, pageSize }: PaginationDto): Promise<{
        data: DetailDelegationEntity[];
        count: number;
    }>;
    getDetailDelegationById(id: number): Promise<DetailDelegationDTO>;
    createDetailDelegation(detailDelegationDTO: DetailDelegationDTO): Promise<DetailDelegationDTO & DetailDelegationEntity>;
    updateDetailDelegation(id: number, detailDelegationDTO: DetailDelegationDTO): Promise<DetailDelegationDTO | any>;
    deleteDetailDelegation(id: number): Promise<import("typeorm").DeleteResult>;
}
