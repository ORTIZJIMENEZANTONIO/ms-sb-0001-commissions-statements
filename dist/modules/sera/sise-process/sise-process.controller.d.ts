import { Logger } from 'winston';
import { SiseProcessService } from './sise-process.service';
import { SiseProcessDto } from './dto/sise-process.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { UpdateSiseProcessDto } from './dto/update-sisi-process.dto';
export declare class SiseProcessController {
    private readonly siseProcessService;
    private readonly logger;
    constructor(siseProcessService: SiseProcessService, logger: Logger);
    createSiseProcess(siseProcessDto: SiseProcessDto): Promise<(SiseProcessDto & import("./entities/sise-process.entity").SiseProcessEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllSiseProcess(pagination: PaginationDto): Promise<{
        data: import("./entities/sise-process.entity").SiseProcessEntity[];
        count: number;
    }>;
    getSiseProcessById(id: number): Promise<import("./entities/sise-process.entity").SiseProcessEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateSiseProcess(data: UpdateSiseProcessDto & SiseProcessDto): Promise<import("./entities/sise-process.entity").SiseProcessEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteSiseProcess(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
