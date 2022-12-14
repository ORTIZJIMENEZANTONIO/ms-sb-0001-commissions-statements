import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ProficientDTO } from './dto/proficient.dto';
import { ProficientService } from './proficient.service';
export declare class ProficientController {
    private readonly proficientService;
    constructor(proficientService: ProficientService);
    getAllProficients(pagination: PaginationDto): Promise<{
        data: import("./entity/proficient.entity").ProficientEntity[];
        count: number;
    }>;
    getProficientById(id: number): Promise<ProficientDTO>;
    createProficient(proficientDTO: ProficientDTO): Promise<(ProficientDTO & import("./entity/proficient.entity").ProficientEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateProficient(proficientDTO: ProficientDTO): Promise<any>;
    deleteProficient(id_proficient: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
