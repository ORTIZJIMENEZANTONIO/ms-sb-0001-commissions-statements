import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { NotaryEntity } from './entity/notary.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { NotaryDTO } from './dto/notary.dto';
export declare class NotaryService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<NotaryEntity>, logger: Logger, counter: Counter<string>);
    getAllNotary({ inicio, pageSize }: PaginationDto): Promise<{
        data: NotaryEntity[];
        count: number;
    }>;
    getNotaryById(id: number): Promise<NotaryDTO>;
    createNotary(notaryDTO: NotaryDTO): Promise<NotaryDTO & NotaryEntity>;
    updateNotary(id: number, notaryDTO: NotaryDTO): Promise<NotaryDTO | any>;
    deleteNotary(id: number): Promise<import("typeorm").DeleteResult>;
}
