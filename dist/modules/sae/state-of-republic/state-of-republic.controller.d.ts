import { Logger } from 'winston';
import { StateOfRepublicService } from './state-of-republic.service';
import { StateOfRepublicDto } from './dto/state-of-republic.dto';
import { UpdateStateOfRepublicDto } from './dto/update-state-of-republic.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StateOfRepublicController {
    private readonly stateOfRepublicService;
    private readonly logger;
    constructor(stateOfRepublicService: StateOfRepublicService, logger: Logger);
    createStateOfRepublic(stateOfRepublicDto: StateOfRepublicDto): Promise<(StateOfRepublicDto & import("./entities/state-of-republic.entity").StateOfRepublicEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllStatesOfRepublic({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/state-of-republic.entity").StateOfRepublicEntity[];
        count: number;
    }>;
    getStateOfRepublicByStateCode(stateCode: string): Promise<import("./entities/state-of-republic.entity").StateOfRepublicEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateStateOfRepublic(stateData: UpdateStateOfRepublicDto & StateOfRepublicDto): Promise<import("./entities/state-of-republic.entity").StateOfRepublicEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteStateOfRepublic(stateCode: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
