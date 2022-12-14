import { Logger } from 'winston';
import { StorehouseService } from './storehouse.service';
import { StorehouseDto } from './dto/storehouse.dto';
import { UpdateStorehouseDto } from './dto/update-storehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StorehouseController {
    private readonly storehouseService;
    private readonly logger;
    constructor(storehouseService: StorehouseService, logger: Logger);
    createstorehouse(storehouseDto: StorehouseDto): Promise<(StorehouseDto & import("./entities/storehouse.entity").StorehouseEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllstorehouses({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/storehouse.entity").StorehouseEntity[];
        count: number;
    }>;
    getstorehouseById(id: string): Promise<import("./entities/storehouse.entity").StorehouseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updatestorehouse(data: UpdateStorehouseDto & StorehouseDto): Promise<import("./entities/storehouse.entity").StorehouseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deletestorehouse(id: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
