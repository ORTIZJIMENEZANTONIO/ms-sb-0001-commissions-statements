import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { HolidayEntity } from './entities/holiday.entity';
import { HolidayDto } from './dto/holiday.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class HolidayService {
    private holidayRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(holidayRepository: Repository<HolidayEntity>, logger: Logger, counter: Counter<string>);
    createHoliday(holidayDto: HolidayDto): Promise<HolidayDto & HolidayEntity>;
    getAllHolidays({ inicio, pageSize }: PaginationDto): Promise<{
        data: HolidayEntity[];
        count: number;
    }>;
    getHolidayById(id: number): Promise<HolidayEntity>;
    updateHoliday(id: number, holidayDto: HolidayDto): Promise<false | HolidayEntity>;
    deleteHoliday(id: number): Promise<false | HolidayEntity>;
}
