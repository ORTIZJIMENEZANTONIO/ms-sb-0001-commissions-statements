import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { StatusProcessDto } from './dto/status_process';
import { PaginationDto } from 'src/shared/dto/pagination';
import { StatusProcessEntity } from './entity/statusprocess.entity';
export declare class StatusProcessService {
    private statusProcess;
    private readonly logger;
    counter: Counter<string>;
    constructor(statusProcess: Repository<StatusProcessEntity>, logger: Logger, counter: Counter<string>);
    getAllStatusService({ inicio, pageSize }: PaginationDto): Promise<{
        data: StatusProcessEntity[];
        count: number;
    }>;
    findStatusService(status: string): Promise<StatusProcessEntity>;
    createStatusService(statusProcessDto: StatusProcessDto): Promise<StatusProcessDto & StatusProcessEntity>;
    updateStatusService(statusProcessDto: any): Promise<false | StatusProcessEntity>;
    deleteStatusService(status: string): Promise<import("typeorm").DeleteResult>;
}
