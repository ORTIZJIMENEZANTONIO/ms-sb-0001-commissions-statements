import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { RevisionReasonDTO } from './dto/revision-reason.dto';
import { RevisionReasonEntity } from './entity/revision-reason.entity';
export declare class RevisionReasonService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<RevisionReasonEntity>, logger: Logger, counter: Counter<string>);
    getAllRevisionReason({ inicio, pageSize }: PaginationDto): Promise<{
        data: RevisionReasonEntity[];
        count: number;
    }>;
    getRevisionReasonById(id: number): Promise<RevisionReasonDTO>;
    createRevisionReason(revisionReasonDTO: RevisionReasonDTO): Promise<RevisionReasonDTO & RevisionReasonEntity>;
    updateRevisionReason(id: number, revisionReasonDTO: RevisionReasonDTO): Promise<RevisionReasonDTO | any>;
    deleteRevisionReason(id: number): Promise<import("typeorm").DeleteResult>;
}
