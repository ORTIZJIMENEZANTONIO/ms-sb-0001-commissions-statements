import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LegalAffairService } from './legal-affair.service';
import { LegalAffairDto } from './dto/legal-affair.dto';
import { UpdateLegalAffairDto } from './dto/update-legal-affair.dto';
export declare class LegalAffairController {
    private readonly legalAffairService;
    private readonly logger;
    constructor(legalAffairService: LegalAffairService, logger: Logger);
    createLegalAffair(legalAffairDto: LegalAffairDto): Promise<(LegalAffairDto & import("./entities/legal-affair.entity").LegalAffairEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllLegalAffairs(pagination: PaginationDto): Promise<{
        data: import("./entities/legal-affair.entity").LegalAffairEntity[];
        count: number;
    }>;
    getLegalAffairById(id: number): Promise<import("./entities/legal-affair.entity").LegalAffairEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateLegalAffair(data: UpdateLegalAffairDto & LegalAffairDto): Promise<import("./entities/legal-affair.entity").LegalAffairEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteLegalAffair(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
