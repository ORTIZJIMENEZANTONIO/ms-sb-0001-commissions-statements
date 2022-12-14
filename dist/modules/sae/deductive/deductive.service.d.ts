import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { DeductiveEntity } from './entities/deductive.entity';
import { DeductiveDto } from './dto/deductive.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DeductiveService {
    private deductiveRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(deductiveRepository: Repository<DeductiveEntity>, logger: Logger, counter: Counter<string>);
    createDeductive(deductiveDto: DeductiveDto): Promise<DeductiveDto & DeductiveEntity>;
    getAllDeductives({ inicio, pageSize }: PaginationDto): Promise<{
        data: DeductiveEntity[];
        count: number;
    }>;
    getDeductiveById(id: number): Promise<DeductiveEntity>;
    updateDeductive(id: number, deductiveDto: DeductiveDto): Promise<false | DeductiveEntity>;
    deleteDeductive(id: number): Promise<false | DeductiveEntity>;
}
