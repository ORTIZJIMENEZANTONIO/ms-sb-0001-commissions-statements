import { Logger } from 'winston';
import { NormsService } from './norms.service';
import { NormsDto } from './dto/norms.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class NormsController {
    private readonly normsService;
    private readonly logger;
    constructor(normsService: NormsService, logger: Logger);
    getAllNorms(paginationDto: PaginationDto): Promise<{
        data: import("./entity/norms.entity").NormsEntity[];
        count: number;
    }>;
    createNorm(normsDto: NormsDto): Promise<(NormsDto & import("./entity/norms.entity").NormsEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findNorm(id: number): Promise<import("./entity/norms.entity").NormsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateNorm(normsDto: NormsDto): Promise<import("./entity/norms.entity").NormsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteNorm(id: number): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
