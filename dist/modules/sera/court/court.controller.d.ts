import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CourtService } from './court.service';
import { CourtDTO } from './dto/court.dto';
export declare class CourtController {
    private readonly courtService;
    constructor(courtService: CourtService);
    getAllCourts(pagination: PaginationDto): Promise<{
        data: import("./entity/court.entity").CourtEntity[];
        count: number;
    }>;
    getCourtById(id: number): Promise<CourtDTO>;
    createCourt(courtDTO: CourtDTO): Promise<(CourtDTO & import("./entity/court.entity").CourtEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateCourt(courtDTO: CourtDTO): Promise<any>;
    deleteCourt(id_court: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
