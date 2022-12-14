import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { InstitutionClassificationDTO } from './dto/institution-classification.dto';
import { InstitutionClassificationEntity } from './entity/institution-classification.entity';
import { InstitutionClassificationService } from './institution-classification.service';
export declare class InstitutionClassificationController {
    private readonly institutionClassificationService;
    private readonly logger;
    constructor(institutionClassificationService: InstitutionClassificationService, logger: Logger);
    getAllInstitutionClassifications(pagination: PaginationDto): Promise<{
        data: InstitutionClassificationEntity[];
        count: number;
    }>;
    getInstitutionClassificationById(id: number): Promise<InstitutionClassificationEntity>;
    createInstitutionClassification(institutionClassificationDTO: InstitutionClassificationDTO): Promise<(InstitutionClassificationDTO & InstitutionClassificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateInstitutionClassification(institutionClassificationDTO: InstitutionClassificationDTO): Promise<any>;
    deleteInstitutionClassification(id_institutionClassification: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
