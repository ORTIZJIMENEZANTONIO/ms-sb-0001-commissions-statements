import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SeriesDto } from './dto/series.dto';
import { SeriesService } from './series.service';
import { UpdateSeriesDto } from './dto/update-series.dto';
export declare class SeriesController {
    private readonly seriesService;
    private readonly logger;
    constructor(seriesService: SeriesService, logger: Logger);
    createSeries(seriesDto: SeriesDto): Promise<(SeriesDto & import("./entities/series.entity").SeriesEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllSeries(pagination: PaginationDto): Promise<{
        data: import("./entities/series.entity").SeriesEntity[];
        count: number;
    }>;
    getSeriesById(code: string): Promise<import("./entities/series.entity").SeriesEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateSeries(data: UpdateSeriesDto & SeriesDto): Promise<import("./entities/series.entity").SeriesEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteSeries(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
