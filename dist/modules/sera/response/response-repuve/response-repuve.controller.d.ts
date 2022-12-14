import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseRepuveService } from './response-repuve.service';
import { ResponseRepuveDto } from './dto/response-repuve.dto';
import { UpdateResponseRepuveDto } from './dto/update-response-repuve.dto';
export declare class ResponseRepuveController {
    private readonly responseRepuveService;
    private readonly logger;
    constructor(responseRepuveService: ResponseRepuveService, logger: Logger);
    createResponseRepuve(responseRepuveDto: ResponseRepuveDto): Promise<(ResponseRepuveDto & import("./entities/response-repuve.entity").ResponseRepuveEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllResponsesRepuve(pagination: PaginationDto): Promise<{
        data: import("./entities/response-repuve.entity").ResponseRepuveEntity[];
        count: number;
    }>;
    getResponseRepuveById(id: number): Promise<import("./entities/response-repuve.entity").ResponseRepuveEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateResponseRepuve(data: UpdateResponseRepuveDto & ResponseRepuveDto): Promise<import("./entities/response-repuve.entity").ResponseRepuveEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteResponseRepuve(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
