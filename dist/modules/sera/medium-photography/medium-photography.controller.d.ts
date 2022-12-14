import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MediumPhotographyDTO } from './dto/medium-photography.dto';
import { MediumPhotographyService } from './medium-photography.service';
export declare class MediumPhotographyController {
    private readonly mediumPhotographyService;
    constructor(mediumPhotographyService: MediumPhotographyService);
    getAllMediumPhotographys(pagination: PaginationDto): Promise<{
        data: import("./entity/medium-photography.entity").MediumPhotographyEntity[];
        count: number;
    }>;
    getMediumPhotographyById(id: number): Promise<MediumPhotographyDTO>;
    createMediumPhotography(mediumPhotographyDTO: MediumPhotographyDTO): Promise<(MediumPhotographyDTO & import("./entity/medium-photography.entity").MediumPhotographyEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateMediumPhotography(mediumPhotographyDTO: MediumPhotographyDTO): Promise<any>;
    deleteMediumPhotography(id_mediumPhotography: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
