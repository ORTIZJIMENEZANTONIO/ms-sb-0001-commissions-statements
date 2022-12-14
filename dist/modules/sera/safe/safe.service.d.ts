import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { SafeEntity } from './entities/safe.entity';
import { SafeDto } from './dto/safe.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class SafeService {
    private safeRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(safeRepository: Repository<SafeEntity>, logger: Logger, counter: Counter<string>);
    createSafe(safeDto: SafeDto): Promise<SafeDto & SafeEntity>;
    getAllSafes({ inicio, pageSize }: PaginationDto): Promise<{
        data: SafeEntity[];
        count: number;
    }>;
    getSafeById(id: number): Promise<SafeEntity>;
    updateSafe(id: number, safeDto: SafeDto): Promise<false | SafeEntity>;
    deleteSafe(id: number): Promise<import("typeorm").DeleteResult>;
}
