import { Logger } from 'winston';
import { WarehouseService } from './warehouse.service';
import { WarehouseDto } from './dto/warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class WarehouseController {
    private readonly warehouseService;
    private readonly logger;
    constructor(warehouseService: WarehouseService, logger: Logger);
    createWarehouse(warehouseDto: WarehouseDto): Promise<(WarehouseDto & import("./entities/warehouse.entity").WarehouseEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllWarehouses({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/warehouse.entity").WarehouseEntity[];
        count: number;
    }>;
    getWarehouseById(id: number): Promise<import("./entities/warehouse.entity").WarehouseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateWarehouse(data: UpdateWarehouseDto & WarehouseDto): Promise<import("./entities/warehouse.entity").WarehouseEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteWarehouse(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
