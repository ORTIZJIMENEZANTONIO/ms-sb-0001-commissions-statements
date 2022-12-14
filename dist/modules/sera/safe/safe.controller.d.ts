import { Logger } from 'winston';
import { SafeService } from './safe.service';
import { SafeDto } from './dto/safe.dto';
import { UpdateSafeDto } from './dto/update-safe.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class SafeController {
    private readonly safeService;
    private readonly logger;
    constructor(safeService: SafeService, logger: Logger);
    createSafe(safeDto: SafeDto): Promise<(SafeDto & import("./entities/safe.entity").SafeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllSafes({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/safe.entity").SafeEntity[];
        count: number;
    }>;
    getSafeById(id: number): Promise<import("./entities/safe.entity").SafeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateSafe(data: UpdateSafeDto & SafeDto): Promise<import("./entities/safe.entity").SafeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteSafe(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
