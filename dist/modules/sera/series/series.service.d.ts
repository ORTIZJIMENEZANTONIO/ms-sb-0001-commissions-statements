import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SeriesEntity } from './entities/series.entity';
import { SeriesDto } from './dto/series.dto';
export declare class SeriesService {
    private seriesRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(seriesRepository: Repository<SeriesEntity>, logger: Logger, counter: Counter<string>);
    createSeries(seriesDto: SeriesDto): Promise<SeriesDto & SeriesEntity>;
    getAllSeries({ inicio, pageSize }: PaginationDto): Promise<{
        data: SeriesEntity[];
        count: number;
    }>;
    getSerieByCode(code: string): Promise<SeriesEntity>;
    updateSerie(code: string, seriesDto: SeriesDto): Promise<false | SeriesEntity>;
    deleteSeries(code: string): Promise<false | SeriesEntity>;
}
