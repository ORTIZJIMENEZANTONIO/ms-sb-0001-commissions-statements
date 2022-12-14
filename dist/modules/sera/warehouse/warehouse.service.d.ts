import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { WarehouseEntity } from './entities/warehouse.entity';
import { WarehouseDto } from './dto/warehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class WarehouseService {
    private warehouseRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(warehouseRepository: Repository<WarehouseEntity>, logger: Logger, counter: Counter<string>);
    createWarehouse(warehouseDto: WarehouseDto): Promise<WarehouseDto & WarehouseEntity>;
    getAllWarehouses({ inicio, pageSize }: PaginationDto): Promise<{
        data: WarehouseEntity[];
        count: number;
    }>;
    getWarehouseById(id: number): Promise<WarehouseEntity>;
    updateWarehouse(id: number, updatewarehouseDto: WarehouseDto): Promise<false | WarehouseEntity>;
    deleteWarehouse(id: number): Promise<import("typeorm").DeleteResult>;
}
