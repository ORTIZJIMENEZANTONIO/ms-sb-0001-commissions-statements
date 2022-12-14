import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { IndicatorDeadlinesDTO } from './dto/indicator-deadlines.dto';
import { IndicatorDeadlinesEntity } from './entity/indicator-deadlines.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class IndicatorDeadlinesService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<IndicatorDeadlinesEntity>, logger: Logger, counter: Counter<string>);
    getAllIndicatorDeadlines({ inicio, pageSize }: PaginationDto): Promise<{
        data: IndicatorDeadlinesEntity[];
        count: number;
    }>;
    getIndicatorDeadlineById(id: number): Promise<IndicatorDeadlinesEntity>;
    createIndicatorDeadlines(indicatorDeadlinesDTO: IndicatorDeadlinesDTO): Promise<IndicatorDeadlinesDTO & IndicatorDeadlinesEntity>;
    updateIndicatorDeadlines(id: number, indicatorDeadlinesDTO: IndicatorDeadlinesDTO): Promise<IndicatorDeadlinesEntity | any>;
    deleteIndicatorDeadlines(id: number): Promise<import("typeorm").UpdateResult>;
}
