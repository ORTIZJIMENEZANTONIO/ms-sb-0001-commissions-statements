import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RackEntity } from './entities/rack.entity';
import { RackDto } from './dto/rack.dto';
export declare class RackService {
    private rackRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(rackRepository: Repository<RackEntity>, logger: Logger, counter: Counter<string>);
    createRack(rackDto: RackDto): Promise<RackDto & RackEntity>;
    getAllRacks({ inicio, pageSize }: PaginationDto): Promise<{
        data: RackEntity[];
        count: number;
    }>;
    getRackById(id: number): Promise<RackEntity>;
    updateRack(id: number, rackDto: RackDto): Promise<false | RackEntity>;
    deleteRack(id: number): Promise<false | RackEntity>;
}
