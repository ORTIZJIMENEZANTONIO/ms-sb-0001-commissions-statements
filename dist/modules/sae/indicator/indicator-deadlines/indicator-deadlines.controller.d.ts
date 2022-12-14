import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IndicatorDeadlinesDTO } from './dto/indicator-deadlines.dto';
import { IndicatorDeadlinesEntity } from './entity/indicator-deadlines.entity';
import { IndicatorDeadlinesService } from './indicator-deadlines.service';
export declare class IndicatorDeadlinesController {
    private readonly indicatorService;
    private readonly logger;
    constructor(indicatorService: IndicatorDeadlinesService, logger: Logger);
    getAllIndicatorDeadliness(pagination: PaginationDto): Promise<{
        data: IndicatorDeadlinesEntity[];
        count: number;
    }>;
    getIndicatorDeadlineById(id: number): Promise<IndicatorDeadlinesEntity>;
    createIndicatorDeadlines(indicatorDeadlinesDTO: IndicatorDeadlinesDTO): Promise<(IndicatorDeadlinesDTO & IndicatorDeadlinesEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateIndicatorDeadlines(indicatorDeadlinesDTO: IndicatorDeadlinesDTO): Promise<any>;
    deleteIndicatorDeadlines(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
