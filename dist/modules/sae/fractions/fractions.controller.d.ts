import { Logger } from 'winston';
import { FractionsService } from './fractions.service';
import { FractionsDto } from './dto/fractions.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class FractionsController {
    private readonly fractionsService;
    private readonly logger;
    constructor(fractionsService: FractionsService, logger: Logger);
    getAllFractions(paginationDto: PaginationDto): Promise<{
        data: import("./entity/fraction.entity").FractionEntity[];
        count: number;
    }>;
    findFraction(id: number): Promise<import("./entity/fraction.entity").FractionEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    createFraction(fractionsDto: FractionsDto): Promise<(FractionsDto & import("./entity/fraction.entity").FractionEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateFraction(FractionsDto: any): Promise<import("./entity/fraction.entity").FractionEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteFraction(id: number): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
