import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { LegalAffairEntity } from './entities/legal-affair.entity';
import { LegalAffairDto } from './dto/legal-affair.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class LegalAffairService {
    private legalAffairRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(legalAffairRepository: Repository<LegalAffairEntity>, logger: Logger, counter: Counter<string>);
    createLegalAffair(LegalAffairDto: LegalAffairDto): Promise<LegalAffairDto & LegalAffairEntity>;
    getAllLegalAffairs({ inicio, pageSize }: PaginationDto): Promise<{
        data: LegalAffairEntity[];
        count: number;
    }>;
    getLegalAffairById(id: number): Promise<LegalAffairEntity>;
    updateLegalAffair(id: number, legalAffairDto: LegalAffairDto): Promise<false | LegalAffairEntity>;
    deleteLegalAffair(id: number): Promise<import("typeorm").DeleteResult>;
}
