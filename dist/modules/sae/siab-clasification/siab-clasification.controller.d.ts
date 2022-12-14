import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SiabClasificationDto } from './dto/siab-clasification.dto';
import { SiabClasificationService } from './siab-clasification.service';
import { UpdateSiabClasificationDto } from './dto/update-siab-clasification.dto';
export declare class SiabClasificationController {
    private readonly siabClasificationService;
    private readonly logger;
    constructor(siabClasificationService: SiabClasificationService, logger: Logger);
    createSiabClasification(siabClasificationDto: SiabClasificationDto): Promise<(SiabClasificationDto & import("./entities/siab-clasification.entity").SiabClasificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllSiabClasifications(pagination: PaginationDto): Promise<{
        data: import("./entities/siab-clasification.entity").SiabClasificationEntity[];
        count: number;
    }>;
    getSiabClasificationById(id: number): Promise<import("./entities/siab-clasification.entity").SiabClasificationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateSiabClasification(data: UpdateSiabClasificationDto & SiabClasificationDto): Promise<import("./entities/siab-clasification.entity").SiabClasificationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteSiabClasification(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
