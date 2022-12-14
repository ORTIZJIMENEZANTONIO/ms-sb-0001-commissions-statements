import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { NotaryDTO } from './dto/notary.dto';
import { NotaryService } from './notary.service';
export declare class NotaryController {
    private readonly notaryService;
    constructor(notaryService: NotaryService);
    getAllNotarys(pagination: PaginationDto): Promise<{
        data: import("./entity/notary.entity").NotaryEntity[];
        count: number;
    }>;
    getNotaryById(id: number): Promise<NotaryDTO>;
    createNotary(notaryDTO: NotaryDTO): Promise<(NotaryDTO & import("./entity/notary.entity").NotaryEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateNotary(notaryDTO: NotaryDTO): Promise<any>;
    deleteNotary(id_notary: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
