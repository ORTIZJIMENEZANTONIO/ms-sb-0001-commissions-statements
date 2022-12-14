import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ReportDTO } from './dto/report.dto';
import { ReportEntity } from './entity/report.entity';
import { ReportService } from './report.service';
export declare class ReportController {
    private readonly reportService;
    private readonly logger;
    constructor(reportService: ReportService, logger: Logger);
    getAllReports(pagination: PaginationDto): Promise<{
        data: ReportEntity[];
        count: number;
    }>;
    getReportById(id: number): Promise<ReportDTO>;
    createReport(reportDTO: ReportDTO): Promise<(ReportDTO & ReportEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateReport(reportDTO: ReportDTO): Promise<any>;
    deleteReport(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
