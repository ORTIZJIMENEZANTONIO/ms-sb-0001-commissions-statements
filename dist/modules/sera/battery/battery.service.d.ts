import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { BatteryEntity } from './entities/battery.entity';
import { BatteryDto } from './dto/battery.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class BatteryService {
    private batteryRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(batteryRepository: Repository<BatteryEntity>, logger: Logger, counter: Counter<string>);
    createBattery(batteryDto: BatteryDto): Promise<BatteryDto & BatteryEntity>;
    getAllBatteries({ inicio, pageSize }: PaginationDto): Promise<{
        data: BatteryEntity[];
        count: number;
    }>;
    getBatteryById(id: number): Promise<BatteryEntity>;
    updateBattery(id: number, batteryDto: BatteryDto): Promise<false | BatteryEntity>;
    deleteBattery(id: number): Promise<false | BatteryEntity>;
}
