import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { ReportEntity } from './entity/report.entity';
import { ReportDTO } from './dto/report.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class ReportService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ReportEntity>, logger: Logger, counter: Counter<string>);
    getAllReport({ inicio, pageSize }: PaginationDto): Promise<{
        data: ReportEntity[];
        count: number;
    }>;
    getReportById(id: number): Promise<ReportDTO>;
    createReport(reportDTO: ReportDTO): Promise<ReportDTO & ReportEntity>;
    updateReport(id: number, reportDTO: ReportDTO): Promise<ReportDTO | any>;
    deleteReport(id: number): Promise<import("typeorm").DeleteResult>;
}
