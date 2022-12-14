import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { InstitutionClassificationDTO } from './dto/institution-classification.dto';
import { InstitutionClassificationEntity } from './entity/institution-classification.entity';
export declare class InstitutionClassificationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<InstitutionClassificationEntity>, logger: Logger, counter: Counter<string>);
    getAllInstitutionClassification({ inicio, pageSize }: PaginationDto): Promise<{
        data: InstitutionClassificationEntity[];
        count: number;
    }>;
    getInstitutionClassificationById(id: number): Promise<InstitutionClassificationEntity>;
    createInstitutionClassification(institutionClassificationDTO: InstitutionClassificationDTO): Promise<InstitutionClassificationDTO & InstitutionClassificationEntity>;
    updateInstitutionClassification(id: number, institutionClassificationDTO: InstitutionClassificationDTO): Promise<InstitutionClassificationEntity | any>;
    deleteInstitutionClassification(id: number): Promise<import("typeorm").DeleteResult>;
}
