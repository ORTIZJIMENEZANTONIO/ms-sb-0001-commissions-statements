import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityEntity } from './entities/city.entity';
import { CityDto } from './dto/city.dto';
export declare class CityService {
    private cityRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(cityRepository: Repository<CityEntity>, logger: Logger, counter: Counter<string>);
    createCity(cityDto: CityDto): Promise<CityDto & CityEntity>;
    getAllCities({ inicio, pageSize }: PaginationDto): Promise<{
        data: CityEntity[];
        count: number;
    }>;
    getCityByCode(id: string): Promise<CityEntity>;
    updateCity(id: string, cityDto: CityDto): Promise<false | CityEntity>;
    deleteCity(code: string): Promise<import("typeorm").DeleteResult>;
}
