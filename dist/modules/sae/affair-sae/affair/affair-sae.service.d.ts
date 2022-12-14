import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { AffairSaeEntity } from './entities/affair-sae.entity';
import { AffairSaeDto } from './dto/affair-sae.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AffairSaeService {
    private affairSaeRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(affairSaeRepository: Repository<AffairSaeEntity>, logger: Logger, counter: Counter<string>);
    createAffairSae(affairSaeDto: AffairSaeDto): Promise<AffairSaeDto & AffairSaeEntity>;
    getAllAffairsSae({ inicio, pageSize }: PaginationDto): Promise<{
        data: AffairSaeEntity[];
        count: number;
    }>;
    getAffairSaeById(id: number): Promise<AffairSaeEntity>;
    updateAffairSae(id: number, affairSaeDto: AffairSaeDto): Promise<false | AffairSaeEntity>;
    deleteAffairSae(code: number): Promise<import("typeorm").DeleteResult>;
}
