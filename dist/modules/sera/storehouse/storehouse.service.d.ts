import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { StorehouseEntity } from './entities/storehouse.entity';
import { StorehouseDto } from './dto/storehouse.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StorehouseService {
    private storehouseRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(storehouseRepository: Repository<StorehouseEntity>, logger: Logger, counter: Counter<string>);
    createStorehouse(StorehouseDto: StorehouseDto): Promise<StorehouseDto & StorehouseEntity>;
    getAllStorehouses({ inicio, pageSize }: PaginationDto): Promise<{
        data: StorehouseEntity[];
        count: number;
    }>;
    getStorehouseById(code: string): Promise<StorehouseEntity>;
    updateStorehouse(code: string, storehouseDto: StorehouseDto): Promise<false | StorehouseEntity>;
    deleteStorehouse(id: string): Promise<import("typeorm").DeleteResult>;
}
