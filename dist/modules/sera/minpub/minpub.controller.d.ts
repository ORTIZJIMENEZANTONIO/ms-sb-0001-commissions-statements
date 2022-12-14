import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MinpubDTO } from './dto/minpub.dto';
import { MinpubService } from './minpub.service';
export declare class MinpubController {
    private readonly minpubService;
    constructor(minpubService: MinpubService);
    getAllMinpubs(pagination: PaginationDto): Promise<{
        data: import("./entity/minpub.entity").MinpubEntity[];
        count: number;
    }>;
    getMinpubById(id: number): Promise<MinpubDTO>;
    createMinpub(minpubDTO: MinpubDTO): Promise<(MinpubDTO & import("./entity/minpub.entity").MinpubEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateMinpub(minpubDTO: MinpubDTO): Promise<any>;
    deleteMinpub(id_minpub: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
