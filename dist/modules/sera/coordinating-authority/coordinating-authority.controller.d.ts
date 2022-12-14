import { Logger } from 'winston';
import { CoordinatingAuthorityService } from './coordinating-authority.service';
import { CoordinatingAuthorityDto } from './dto/coordinating-authority.dto';
import { UpdateCoordinatingAuthorityDto } from './dto/update-coordinating-authority.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class CoordinatingAuthorityController {
    private readonly coordinatingAuthorityService;
    private readonly logger;
    constructor(coordinatingAuthorityService: CoordinatingAuthorityService, logger: Logger);
    createcoordinatingAuthority(coordinatingAuthorityDto: CoordinatingAuthorityDto): Promise<(CoordinatingAuthorityDto & import("./entities/coordinating-authority.entity").CoordinatingAuthorityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllCoordinatingAuthorities({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/coordinating-authority.entity").CoordinatingAuthorityEntity[];
        count: number;
    }>;
    getcoordinatingAuthorityById(id: number): Promise<import("./entities/coordinating-authority.entity").CoordinatingAuthorityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updatecoordinatingAuthority(data: UpdateCoordinatingAuthorityDto & CoordinatingAuthorityDto): Promise<import("./entities/coordinating-authority.entity").CoordinatingAuthorityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deletecoordinatingAuthority(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
