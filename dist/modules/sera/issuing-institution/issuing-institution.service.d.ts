import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { IssuingInstitutionEntity } from './entity/issuing-institution.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IssuingInstitutionDTO } from './dto/issuing-institution.dto';
export declare class IssuingInstitutionService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<IssuingInstitutionEntity>, logger: Logger, counter: Counter<string>);
    getAllIssuingInstitution({ inicio, pageSize }: PaginationDto): Promise<{
        data: IssuingInstitutionEntity[];
        count: number;
    }>;
    getIssuingInstitutionById(id: number): Promise<IssuingInstitutionDTO>;
    createIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO): Promise<IssuingInstitutionDTO & IssuingInstitutionEntity>;
    updateIssuingInstitution(id: number, issuingInstitutionDTO: IssuingInstitutionDTO): Promise<IssuingInstitutionEntity | any>;
    deleteIssuingInstitution(id: number): Promise<import("typeorm").DeleteResult>;
}
