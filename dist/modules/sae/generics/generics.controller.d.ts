import { Logger } from 'winston';
import { GenericsService } from './generics.service';
import { GenericsDto } from './dto/generics.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class GenericsController {
    private readonly genericsService;
    private readonly logger;
    constructor(genericsService: GenericsService, logger: Logger);
    getAllGenerics(paginationDto: PaginationDto): Promise<{
        data: import("./entity/generics.entity").genericsEntity[];
        count: number;
    }>;
    createGeneric(genericDto: GenericsDto): Promise<(GenericsDto & import("./entity/generics.entity").genericsEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findGeneric(name: string): Promise<import("./entity/generics.entity").genericsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateGeneric(GenericsDto: any): Promise<import("./entity/generics.entity").genericsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteGeneric(name: string): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
