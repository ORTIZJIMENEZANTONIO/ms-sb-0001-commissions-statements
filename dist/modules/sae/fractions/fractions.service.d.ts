import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { FractionsDto } from './dto/fractions.dto';
import { FractionEntity } from './entity/fraction.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class FractionsService {
    private fraction;
    private readonly logger;
    counter: Counter<string>;
    constructor(fraction: Repository<FractionEntity>, logger: Logger, counter: Counter<string>);
    getAllFractions({ inicio, pageSize }: PaginationDto): Promise<{
        data: FractionEntity[];
        count: number;
    }>;
    findFraction(id: number): Promise<FractionEntity>;
    createFraction(fractionsDto: FractionsDto): Promise<FractionsDto & FractionEntity>;
    updateFraction(FractionsDto: FractionsDto): Promise<false | FractionEntity>;
    deleteFraction(id: number): Promise<import("typeorm").DeleteResult>;
}
