import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { CourtEntity } from './entity/court.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CourtDTO } from './dto/court.dto';
export declare class CourtService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<CourtEntity>, logger: Logger, counter: Counter<string>);
    getAllCourt({ inicio, pageSize }: PaginationDto): Promise<{
        data: CourtEntity[];
        count: number;
    }>;
    getCourtById(id: number): Promise<CourtDTO>;
    createCourt(courtDTO: CourtDTO): Promise<CourtDTO & CourtEntity>;
    updateCourt(id: number, courtDTO: CourtDTO): Promise<CourtDTO | any>;
    deleteCourt(id: number): Promise<import("typeorm").DeleteResult>;
}
