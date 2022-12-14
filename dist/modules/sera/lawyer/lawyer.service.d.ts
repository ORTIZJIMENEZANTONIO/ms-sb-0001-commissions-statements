import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { LawyerEntity } from './entities/laywer.entity';
import { LawyerDto } from './dto/lawyer.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class LawyerService {
    private lawyerRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(lawyerRepository: Repository<LawyerEntity>, logger: Logger, counter: Counter<string>);
    createLawyer(lawyerDto: LawyerDto): Promise<LawyerDto & LawyerEntity>;
    getAllLawyers({ inicio, pageSize }: PaginationDto): Promise<{
        data: LawyerEntity[];
        count: number;
    }>;
    getLawyerById(id: number): Promise<LawyerEntity>;
    updateLawyer(id: number, lawyerDto: LawyerDto): Promise<false | LawyerEntity>;
    deleteLawyer(id: number): Promise<import("typeorm").DeleteResult>;
}
