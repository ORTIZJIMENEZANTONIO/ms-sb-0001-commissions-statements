import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairTypeService } from './affair-type.service';
import { AffairTypeDto } from './dto/affair-type.dto';
import { UpdateAffairTypeDto } from './dto/update-affair-type.dto';
export declare class AffairTypeController {
    private readonly affairTypeService;
    private readonly logger;
    constructor(affairTypeService: AffairTypeService, logger: Logger);
    createAffairType(affairTypeDto: AffairTypeDto): Promise<(AffairTypeDto & import("./entities/affair-type.entity").AffairTypeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllAffairTypes(pagination: PaginationDto): Promise<{
        data: import("./entities/affair-type.entity").AffairTypeEntity[];
        count: number;
    }>;
    getAffairTypeById(id: number): Promise<import("./entities/affair-type.entity").AffairTypeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateAffairType(data: UpdateAffairTypeDto & AffairTypeDto): Promise<import("./entities/affair-type.entity").AffairTypeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteAffairType(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
