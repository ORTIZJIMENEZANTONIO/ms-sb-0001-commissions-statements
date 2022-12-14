import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { LegalSupportsDTO } from './dto/legal-supports.dto';
import { LegalSupportsEntity } from './entity/legal-supports.entity';
export declare class LegalSupportsService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<LegalSupportsEntity>, logger: Logger, counter: Counter<string>);
    getAllLegalSupports({ inicio, pageSize }: PaginationDto): Promise<{
        data: LegalSupportsEntity[];
        count: number;
    }>;
    getLegalSupportsById(id: string): Promise<LegalSupportsDTO>;
    createLegalSupports(legalSupportsDTO: LegalSupportsDTO): Promise<LegalSupportsDTO & LegalSupportsEntity>;
    updateLegalSupports(id: string, legalSupportsDTO: LegalSupportsDTO): Promise<LegalSupportsDTO | any>;
    deleteLegalSupports(id: string): Promise<import("typeorm").DeleteResult>;
}
