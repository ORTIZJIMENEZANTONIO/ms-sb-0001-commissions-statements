import { Logger } from 'winston';
import { HolidayService } from './holiday.service';
import { HolidayDto } from './dto/holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dt';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class HolidayController {
    private readonly holidayService;
    private readonly logger;
    constructor(holidayService: HolidayService, logger: Logger);
    createHoliday(holidayDto: HolidayDto): Promise<(HolidayDto & import("./entities/holiday.entity").HolidayEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllHolidays({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/holiday.entity").HolidayEntity[];
        count: number;
    }>;
    getHolidayById(id: number): Promise<import("./entities/holiday.entity").HolidayEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateHoliday(data: UpdateHolidayDto & HolidayDto): Promise<import("./entities/holiday.entity").HolidayEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteHoliday(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
