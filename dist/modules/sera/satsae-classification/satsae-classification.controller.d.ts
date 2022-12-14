import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatSaeClassificationDTO } from './dto/satsae-classification.dto';
import { SatSaeClassificationEntity } from './entity/satsae-classification.entity';
import { SatsaeClassificationService } from './satsae-classification.service';
export declare class SatsaeClassificationController {
    private readonly satSaeClassificationService;
    constructor(satSaeClassificationService: SatsaeClassificationService);
    getAllSatSaeClassifications(pagination: PaginationDto): Promise<{
        data: SatSaeClassificationEntity[];
        count: number;
    }>;
    getSatSaeClassificationById(id: number): Promise<SatSaeClassificationDTO>;
    createSatSaeClassification(satSaeClassificationDTO: SatSaeClassificationDTO): Promise<(SatSaeClassificationDTO & SatSaeClassificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateSatSaeClassification(satSaeClassificationDTO: SatSaeClassificationDTO): Promise<any>;
    deleteSatSaeClassification(id_satSaeClassification: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
