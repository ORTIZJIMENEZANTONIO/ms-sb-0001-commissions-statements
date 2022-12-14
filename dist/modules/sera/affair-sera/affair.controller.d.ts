import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairService } from './affair.service';
import { AffairDto } from './dto/affair.dto';
import { UpdateAffairDto } from './dto/update-affair.dto';
export declare class AffairController {
    private readonly affairService;
    private readonly logger;
    constructor(affairService: AffairService, logger: Logger);
    createAffair(affairDto: AffairDto): Promise<(AffairDto & import("./entities/affair.entity").AffairEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllAffairs(pagination: PaginationDto): Promise<{
        data: import("./entities/affair.entity").AffairEntity[];
        count: number;
    }>;
    getAffairById(id: number): Promise<import("./entities/affair.entity").AffairEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateAffair(data: UpdateAffairDto & AffairDto): Promise<import("./entities/affair.entity").AffairEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteAffair(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
