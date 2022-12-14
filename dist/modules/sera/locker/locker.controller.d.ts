import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LockerDTO } from './dto/locker.dto';
import { LockerEntity } from './entity/locker.entity';
import { LockerService } from './locker.service';
export declare class LockerController {
    private readonly lockerService;
    private readonly logger;
    constructor(lockerService: LockerService, logger: Logger);
    getAllLockers(pagination: PaginationDto): Promise<{
        data: LockerEntity[];
        count: number;
    }>;
    getLockerById(id: string): Promise<LockerEntity>;
    createLocker(lockerDTO: LockerDTO): Promise<(LockerDTO & LockerEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateLocker(lockerDTO: LockerDTO): Promise<any>;
    deleteLocker(id: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
