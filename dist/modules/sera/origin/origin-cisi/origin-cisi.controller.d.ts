import { Logger } from 'winston';
import { OriginCisiService } from './origin-cisi.service';
import { OriginCisiDto } from './dto/origin-cisi.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { UpdateOriginCisiDto } from './dto/update-origin-cisi.dto';
export declare class OriginCisiController {
    private readonly originCisiService;
    private readonly logger;
    constructor(originCisiService: OriginCisiService, logger: Logger);
    createOriginCisi(originCisiDto: OriginCisiDto): Promise<(OriginCisiDto & import("./entities/origin-cisi.entity").OriginCisiEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllOrigins(pagination: PaginationDto): Promise<{
        data: import("./entities/origin-cisi.entity").OriginCisiEntity[];
        count: number;
    }>;
    getOriginCisiById(id: number): Promise<import("./entities/origin-cisi.entity").OriginCisiEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateOrigin(data: UpdateOriginCisiDto & OriginCisiDto): Promise<import("./entities/origin-cisi.entity").OriginCisiEntity | {
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
