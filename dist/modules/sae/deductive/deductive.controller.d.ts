import { Logger } from 'winston';
import { DeductiveService } from './deductive.service';
import { DeductiveDto } from './dto/deductive.dto';
import { UpdateDeductiveDto } from './dto/update-deductive.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DeductiveController {
    private readonly deductiveService;
    private readonly logger;
    constructor(deductiveService: DeductiveService, logger: Logger);
    createDeductive(deductiveDto: DeductiveDto): Promise<(DeductiveDto & import("./entities/deductive.entity").DeductiveEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllDeductives({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/deductive.entity").DeductiveEntity[];
        count: number;
    }>;
    getDeductiveById(id: number): Promise<import("./entities/deductive.entity").DeductiveEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateDeductive(deductiveData: UpdateDeductiveDto & DeductiveDto): Promise<false | import("./entities/deductive.entity").DeductiveEntity>;
    deleteDeductive(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
