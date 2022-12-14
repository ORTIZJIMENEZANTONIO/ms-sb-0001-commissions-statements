import { Logger } from 'winston';
import { OfficialLegendsService } from './official_legends.service';
import { OfficialLegendsDto } from './dto/official_legends.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class OfficialLegendsController {
    private readonly officialLegendsService;
    private readonly logger;
    constructor(officialLegendsService: OfficialLegendsService, logger: Logger);
    getAllOfficialLegends(paginationDto: PaginationDto): Promise<{
        data: import("./entity/official_legends.entity").OfficialLegendsEntity[];
        count: number;
    }>;
    createOfficialLegend(officialLegendsDto: OfficialLegendsDto): Promise<(OfficialLegendsDto & import("./entity/official_legends.entity").OfficialLegendsEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findOfficialLegend(id: number): Promise<import("./entity/official_legends.entity").OfficialLegendsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateOfficialLegend(officialLegendsDto: OfficialLegendsDto): Promise<import("./entity/official_legends.entity").OfficialLegendsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteOfficialLegend(id: number): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
