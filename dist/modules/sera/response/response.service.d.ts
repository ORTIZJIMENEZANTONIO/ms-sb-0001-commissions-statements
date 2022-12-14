import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseEntity } from './entities/response.entity';
import { ResponseDto } from './dto/response.dto';
export declare class ResponseService {
    private responseRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(responseRepository: Repository<ResponseEntity>, logger: Logger, counter: Counter<string>);
    createResponse(responseDto: ResponseDto): Promise<ResponseDto & ResponseEntity>;
    getAllResponses({ inicio, pageSize }: PaginationDto): Promise<{
        data: ResponseEntity[];
        count: number;
    }>;
    getResponseById(id: number): Promise<ResponseEntity>;
    updateResponse(id: number, responseDto: ResponseDto): Promise<false | ResponseEntity>;
    deleteResponse(id: number): Promise<import("typeorm").DeleteResult>;
}
