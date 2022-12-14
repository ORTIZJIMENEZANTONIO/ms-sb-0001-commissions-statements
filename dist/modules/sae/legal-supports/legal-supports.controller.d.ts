import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LegalSupportsDTO } from './dto/legal-supports.dto';
import { LegalSupportsEntity } from './entity/legal-supports.entity';
import { LegalSupportsService } from './legal-supports.service';
export declare class LegalSupportsController {
    private readonly legalSupportsService;
    private readonly logger;
    constructor(legalSupportsService: LegalSupportsService, logger: Logger);
    getAllLegalSupportss(pagination: PaginationDto): Promise<{
        data: LegalSupportsEntity[];
        count: number;
    }>;
    getLegalSupportsById(id: string): Promise<LegalSupportsDTO>;
    createLegalSupports(legalSupportsDTO: LegalSupportsDTO): Promise<(LegalSupportsDTO & LegalSupportsEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateLegalSupports(legalSupportsDTO: LegalSupportsDTO): Promise<any>;
    deleteLegalSupports(id_legalSupports: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
