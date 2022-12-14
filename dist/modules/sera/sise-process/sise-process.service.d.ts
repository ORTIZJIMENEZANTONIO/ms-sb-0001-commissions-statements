import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SiseProcessEntity } from './entities/sise-process.entity';
import { SiseProcessDto } from './dto/sise-process.dto';
export declare class SiseProcessService {
    private siseProcessRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(siseProcessRepository: Repository<SiseProcessEntity>, logger: Logger, counter: Counter<string>);
    createSiseProcess(siseProcessDto: SiseProcessDto): Promise<SiseProcessDto & SiseProcessEntity>;
    getAllSiseProcess({ inicio, pageSize }: PaginationDto): Promise<{
        data: SiseProcessEntity[];
        count: number;
    }>;
    getSiseProcessById(id: number): Promise<SiseProcessEntity>;
    updateSiseProcess(id: number, siseProcessDto: SiseProcessDto): Promise<false | SiseProcessEntity>;
    deleteSiseProcess(id: number): Promise<import("typeorm").DeleteResult>;
}
