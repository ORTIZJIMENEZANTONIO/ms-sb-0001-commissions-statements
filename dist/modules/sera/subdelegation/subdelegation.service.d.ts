import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { SubdelegationDTO } from './dto/subdelegation.dto';
import { SubdelegationEntity } from './entity/subdelegation.entity';
export declare class SubdelegationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<SubdelegationEntity>, logger: Logger, counter: Counter<string>);
    getAllSubdelegation({ inicio, pageSize }: PaginationDto): Promise<{
        data: SubdelegationEntity[];
        count: number;
    }>;
    getSubdelegationById(id: number): Promise<SubdelegationDTO>;
    createSubdelegation(subdelegationDTO: SubdelegationDTO): Promise<SubdelegationDTO & SubdelegationEntity>;
    updateSubdelegation(id: number, subdelegationDTO: SubdelegationDTO): Promise<SubdelegationDTO | any>;
    deleteSubdelegation(id: number): Promise<import("typeorm").DeleteResult>;
}
