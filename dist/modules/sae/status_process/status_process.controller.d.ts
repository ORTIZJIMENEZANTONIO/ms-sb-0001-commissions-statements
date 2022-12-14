import { Logger } from 'winston';
import { StatusProcessService } from './status_process.service';
import { StatusProcessDto } from './dto/status_process';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class StatusProcessController {
    private readonly statusProcessService;
    private readonly logger;
    constructor(statusProcessService: StatusProcessService, logger: Logger);
    getAllStatusService(paginationDto: PaginationDto): Promise<{
        data: import("./entity/statusprocess.entity").StatusProcessEntity[];
        count: number;
    }>;
    findStatusService(status: string): Promise<import("./entity/statusprocess.entity").StatusProcessEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    createStatusService(statusProcessDto: StatusProcessDto): Promise<(StatusProcessDto & import("./entity/statusprocess.entity").StatusProcessEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateStatusService(statusProcessDto: any): Promise<import("./entity/statusprocess.entity").StatusProcessEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    DeleteEstatusService(status: string): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
