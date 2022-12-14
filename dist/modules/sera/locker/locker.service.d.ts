import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { LockerDTO } from './dto/locker.dto';
import { LockerEntity } from './entity/locker.entity';
export declare class LockerService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<LockerEntity>, logger: Logger, counter: Counter<string>);
    getAllLocker({ inicio, pageSize }: PaginationDto): Promise<{
        data: LockerEntity[];
        count: number;
    }>;
    getLockerById(id: string): Promise<LockerEntity>;
    createLocker(lockerDTO: LockerDTO): Promise<LockerDTO & LockerEntity>;
    updateLocker(id: string, lockerDTO: LockerDTO): Promise<LockerEntity | any>;
    deleteLocker(id: string): Promise<import("typeorm").DeleteResult>;
}
