import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RackDto } from './dto/rack.dto';
import { RackService } from './rack.service';
import { UpdateRackDto } from './dto/update-rack.dto';
export declare class RackController {
    private readonly rackService;
    private readonly logger;
    constructor(rackService: RackService, logger: Logger);
    createRack(rackDto: RackDto): Promise<(RackDto & import("./entities/rack.entity").RackEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllRacks(pagination: PaginationDto): Promise<{
        data: import("./entities/rack.entity").RackEntity[];
        count: number;
    }>;
    getRackById(id: number): Promise<import("./entities/rack.entity").RackEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateRack(data: UpdateRackDto & RackDto): Promise<import("./entities/rack.entity").RackEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteRack(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
