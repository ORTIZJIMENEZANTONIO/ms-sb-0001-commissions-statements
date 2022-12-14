import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CityController {
    private readonly cityService;
    private readonly logger;
    constructor(cityService: CityService, logger: Logger);
    createCity(CityDto: CityDto): Promise<(CityDto & import("./entities/city.entity").CityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllCities(pagination: PaginationDto): Promise<{
        data: import("./entities/city.entity").CityEntity[];
        count: number;
    }>;
    getCitytByCode(code: string): Promise<import("./entities/city.entity").CityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateCity(data: UpdateCityDto & CityDto): Promise<import("./entities/city.entity").CityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteCity(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
