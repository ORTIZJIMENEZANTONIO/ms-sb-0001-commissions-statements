import { Logger } from 'winston';
import { OriginService } from './origin.service';
import { OriginDto } from './dto/origin.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { UpdateOriginDto } from './dto/update-origin.dto';
export declare class OriginController {
    private readonly originService;
    private readonly logger;
    constructor(originService: OriginService, logger: Logger);
    createOrigin(originDto: OriginDto): Promise<(OriginDto & import("./entities/origin.entity").OriginEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllOrigins(pagination: PaginationDto): Promise<{
        data: import("./entities/origin.entity").OriginEntity[];
        count: number;
    }>;
    getOriginById(id: number): Promise<import("./entities/origin.entity").OriginEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateOrigin(data: UpdateOriginDto & OriginDto): Promise<import("./entities/origin.entity").OriginEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteOrigin(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
