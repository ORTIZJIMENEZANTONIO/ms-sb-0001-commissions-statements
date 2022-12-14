import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PenaltyDTO } from './dto/penalty.dto';
import { PenaltyEntity } from './entity/penalty.entity';
import { PenaltyService } from './penalty.service';
export declare class PenaltyController {
    private readonly penaltyService;
    constructor(penaltyService: PenaltyService);
    getAllPenaltys(pagination: PaginationDto): Promise<{
        data: PenaltyEntity[];
        count: number;
    }>;
    getPenaltyById(id: number): Promise<PenaltyDTO>;
    createPenalty(penaltyDTO: PenaltyDTO): Promise<(PenaltyDTO & PenaltyEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updatePenalty(penaltyDTO: PenaltyDTO): Promise<any>;
    deletePenalty(id_penalty: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
