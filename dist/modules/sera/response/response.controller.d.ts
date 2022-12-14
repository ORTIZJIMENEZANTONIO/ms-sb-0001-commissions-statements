import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseService } from './response.service';
import { ResponseDto } from './dto/response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
export declare class ResponseController {
    private readonly responseService;
    private readonly logger;
    constructor(responseService: ResponseService, logger: Logger);
    createResponse(responseDto: ResponseDto): Promise<(ResponseDto & import("./entities/response.entity").ResponseEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllResponses(pagination: PaginationDto): Promise<{
        data: import("./entities/response.entity").ResponseEntity[];
        count: number;
    }>;
    getResponseById(id: number): Promise<import("./entities/response.entity").ResponseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateResponse(data: UpdateResponseDto & ResponseDto): Promise<import("./entities/response.entity").ResponseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteResponse(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
