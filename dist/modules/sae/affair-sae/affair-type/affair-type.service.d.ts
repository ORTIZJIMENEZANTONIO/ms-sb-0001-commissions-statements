import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { AffairTypeEntity } from './entities/affair-type.entity';
import { AffairTypeDto } from './dto/affair-type.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AffairTypeService {
    private affairTypeRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(affairTypeRepository: Repository<AffairTypeEntity>, logger: Logger, counter: Counter<string>);
    createAffairType(affairTypeDto: AffairTypeDto): Promise<AffairTypeDto & AffairTypeEntity>;
    getAllAffairTypes({ inicio, pageSize }: PaginationDto): Promise<{
        data: AffairTypeEntity[];
        count: number;
    }>;
    getAffairTypeById(id: number): Promise<AffairTypeEntity>;
    updateAffairType(code: number, affairTypeDto: AffairTypeDto): Promise<false | AffairTypeEntity>;
    deleteAffairType(code: number): Promise<import("typeorm").DeleteResult>;
}
