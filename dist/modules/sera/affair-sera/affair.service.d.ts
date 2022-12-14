import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairEntity } from './entities/affair.entity';
import { AffairDto } from './dto/affair.dto';
export declare class AffairService {
    private affairRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(affairRepository: Repository<AffairEntity>, logger: Logger, counter: Counter<string>);
    createAffair(affairDto: AffairDto): Promise<AffairDto & AffairEntity>;
    getAllAffairs({ inicio, pageSize }: PaginationDto): Promise<{
        data: AffairEntity[];
        count: number;
    }>;
    getAffairById(id: number): Promise<AffairEntity>;
    updateAffair(id: number, affairDto: AffairDto): Promise<false | AffairEntity>;
    deleteAffair(code: number): Promise<import("typeorm").DeleteResult>;
}
