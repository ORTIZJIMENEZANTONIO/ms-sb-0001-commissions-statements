import { Logger } from 'winston';
import { BatteryService } from './battery.service';
import { BatteryDto } from './dto/battery.dto';
import { UpdateBatteryDto } from './dto/update-battery.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class BatteryController {
    private readonly batteryService;
    private readonly logger;
    constructor(batteryService: BatteryService, logger: Logger);
    createBattery(batteryDto: BatteryDto): Promise<(BatteryDto & import("./entities/battery.entity").BatteryEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllBatteries({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/battery.entity").BatteryEntity[];
        count: number;
    }>;
    getBatteryById(id: number): Promise<import("./entities/battery.entity").BatteryEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateBattery(data: UpdateBatteryDto & BatteryDto): Promise<import("./entities/battery.entity").BatteryEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteBattery(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
