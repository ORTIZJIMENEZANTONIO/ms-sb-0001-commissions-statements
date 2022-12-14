import { Logger } from 'winston';
import { GeneralStatusService } from './general-status.service';
import { GeneralStatusDto } from './dto/general-status.dto';
import { UpdateGeneralStatusDto } from './dto/update-general-status.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class GeneralStatusController {
    private readonly generalStatusService;
    private readonly logger;
    constructor(generalStatusService: GeneralStatusService, logger: Logger);
    createGeneralStatus(generalStatusDto: GeneralStatusDto): Promise<(GeneralStatusDto & import("./entities/general-status.entity").GeneralStatusEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllGeneralStatus({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/general-status.entity").GeneralStatusEntity[];
        count: number;
    }>;
    getGeneralStatusByStatusGeneral(statusGeneral: string): Promise<import("./entities/general-status.entity").GeneralStatusEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateGeneralStatus(data: UpdateGeneralStatusDto & GeneralStatusDto): Promise<import("./entities/general-status.entity").GeneralStatusEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteGeneralStatus(statusGeneral: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
