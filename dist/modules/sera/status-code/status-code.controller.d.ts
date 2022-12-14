import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { StatusCodeDTO } from './dto/status-code.dto';
import { StatusCodeService } from './status-code.service';
export declare class StatusCodeController {
    private readonly statusCodeService;
    constructor(statusCodeService: StatusCodeService);
    getAllStatusCodes(pagination: PaginationDto): Promise<{
        data: import("./entity/status-code.entity").StatusCodeEntity[];
        count: number;
    }>;
    getStatusCodeById(id: string): Promise<StatusCodeDTO>;
    createStatusCode(statusCodeDTO: StatusCodeDTO): Promise<(StatusCodeDTO & import("./entity/status-code.entity").StatusCodeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateStatusCode(statusCodeDTO: StatusCodeDTO): Promise<any>;
    deleteStatusCode(id: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
