import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatClassificationDTO } from './dto/sat-classification.dto';
import { SatClassificationEntity } from './entity/sat-classification.entity';
import { SatClassificationService } from './sat-classification.service';
export declare class SatClassificationController {
    private readonly satClassificationService;
    private readonly logger;
    constructor(satClassificationService: SatClassificationService, logger: Logger);
    getAllSatClassifications(pagination: PaginationDto): Promise<{
        data: SatClassificationEntity[];
        count: number;
    }>;
    getSatClassificationById(id: number): Promise<SatClassificationDTO>;
    createSatClassification(satClassificationDTO: SatClassificationDTO): Promise<(SatClassificationDTO & SatClassificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateSatClassification(satClassificationDTO: SatClassificationDTO): Promise<any>;
    deleteSatClassification(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
