import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatSubClassificationDTO } from './dto/sat-classification.dto';
import { SatSubClassificationEntity } from './entity/sat-subclassification.entity';
import { SatSubclassificationService } from './sat-subclassification.service';
export declare class SatSubclassificationController {
    private readonly satClassificationService;
    private readonly logger;
    constructor(satClassificationService: SatSubclassificationService, logger: Logger);
    getAllSatSubClassifications(pagination: PaginationDto): Promise<{
        data: SatSubClassificationEntity[];
        count: number;
    }>;
    getSatSubClassificationById(id: number): Promise<SatSubClassificationDTO>;
    createSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO): Promise<(SatSubClassificationDTO & SatSubClassificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO): Promise<any>;
    deleteSatSubClassification(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
