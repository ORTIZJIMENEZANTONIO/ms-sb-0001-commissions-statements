import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairSaeService } from './affair-sae.service';
import { AffairSaeDto } from './dto/affair-sae.dto';
import { UpdateAffairSaeDto } from './dto/update-affair-sae.dto';
export declare class AffairSaeController {
    private readonly affairSaeService;
    private readonly logger;
    constructor(affairSaeService: AffairSaeService, logger: Logger);
    createAffairSae(affairSaeDto: AffairSaeDto): Promise<(AffairSaeDto & import("./entities/affair-sae.entity").AffairSaeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllAffairSaes(pagination: PaginationDto): Promise<{
        data: import("./entities/affair-sae.entity").AffairSaeEntity[];
        count: number;
    }>;
    getAffairSaeById(id: number): Promise<import("./entities/affair-sae.entity").AffairSaeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateAffairSae(data: UpdateAffairSaeDto & AffairSaeDto): Promise<import("./entities/affair-sae.entity").AffairSaeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteAffairSae(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
