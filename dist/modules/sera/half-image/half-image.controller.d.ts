import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { HalfImageDTO } from './dto/half-image.dto';
import { HalfImageService } from './half-image.service';
export declare class HalfImageController {
    private readonly halfImageService;
    constructor(halfImageService: HalfImageService);
    getAllHalfImages(pagination: PaginationDto): Promise<{
        data: import("./entity/half-image.entity").HalfImageEntity[];
        count: number;
    }>;
    getHalfImageById(id: number): Promise<HalfImageDTO>;
    createHalfImage(halfImageDTO: HalfImageDTO): Promise<(HalfImageDTO & import("./entity/half-image.entity").HalfImageEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateHalfImage(halfImageDTO: HalfImageDTO): Promise<any>;
    deleteHalfImage(id_halfImage: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
