import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IndicatorReportDTO } from './dto/indicator-report.dto';
import { IndicatorReportEntity } from './entity/indicator-report.entity';
import { IndicatorReportService } from './indicator-report.service';
export declare class IndicatorReportController {
    private readonly indicatorService;
    private readonly logger;
    constructor(indicatorService: IndicatorReportService, logger: Logger);
    getAllIndicatorReports(pagination: PaginationDto): Promise<{
        data: IndicatorReportEntity[];
        count: number;
    }>;
    getIndicatorReportById(id: number): Promise<IndicatorReportDTO>;
    createIndicatorReport(indicatorDeadlinesDTO: IndicatorReportDTO): Promise<(IndicatorReportDTO & IndicatorReportEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateIndicatorReport(indicatorDeadlinesDTO: IndicatorReportDTO): Promise<any>;
    deleteIndicatorReport(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
