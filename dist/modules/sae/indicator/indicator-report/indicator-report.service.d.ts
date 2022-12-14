import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { IndicatorReportEntity } from './entity/indicator-report.entity';
import { IndicatorReportDTO } from './dto/indicator-report.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class IndicatorReportService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<IndicatorReportEntity>, logger: Logger, counter: Counter<string>);
    getAllIndicatorReport({ inicio, pageSize }: PaginationDto): Promise<{
        data: IndicatorReportEntity[];
        count: number;
    }>;
    getIndicatorReportById(id: number): Promise<IndicatorReportDTO>;
    createIndicatorReport(indicatorDeadlinesDTO: IndicatorReportDTO): Promise<IndicatorReportDTO & IndicatorReportEntity>;
    updateIndicatorReport(id: number, indicatorDeadlinesDTO: IndicatorReportDTO): Promise<IndicatorReportDTO | any>;
    deleteIndicatorReport(id: number): Promise<import("typeorm").UpdateResult>;
}
