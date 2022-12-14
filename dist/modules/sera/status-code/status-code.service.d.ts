import { Logger } from '@nestjs/common';
import { Counter } from "prom-client";
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { StatusCodeDTO } from './dto/status-code.dto';
import { StatusCodeEntity } from './entity/status-code.entity';
export declare class StatusCodeService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<StatusCodeEntity>, logger: Logger, counter: Counter<string>);
    getAllStatusCode({ inicio, pageSize }: PaginationDto): Promise<{
        data: StatusCodeEntity[];
        count: number;
    }>;
    getStatusCodeById(id: string): Promise<StatusCodeDTO>;
    createStatusCode(statusCodeDTO: StatusCodeDTO): Promise<StatusCodeDTO & StatusCodeEntity>;
    updateStatusCode(id: string, statusCodeDTO: StatusCodeDTO): Promise<StatusCodeDTO | any>;
    deleteStatusCode(id: string): Promise<import("typeorm").DeleteResult>;
}
