import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseRepuveEntity } from './entities/response-repuve.entity';
import { ResponseRepuveDto } from './dto/response-repuve.dto';
export declare class ResponseRepuveService {
    private responseRepuveRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(responseRepuveRepository: Repository<ResponseRepuveEntity>, logger: Logger, counter: Counter<string>);
    createResponseRepuve(responseRepuveDto: ResponseRepuveDto): Promise<ResponseRepuveDto & ResponseRepuveEntity>;
    getAllResponsesRepuve({ inicio, pageSize }: PaginationDto): Promise<{
        data: ResponseRepuveEntity[];
        count: number;
    }>;
    getResponseRepuveById(id: number): Promise<ResponseRepuveEntity>;
    updateResponseRepuve(id: number, ResponseRepuveDto: ResponseRepuveDto): Promise<false | ResponseRepuveEntity>;
    deleteResponseRepuve(id: number): Promise<import("typeorm").DeleteResult>;
}
