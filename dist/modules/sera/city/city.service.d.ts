import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from "prom-client";
import { CityDTO } from './dto/city.dto';
import { CityEntity } from './entity/city.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class CityService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<CityEntity>, logger: Logger, counter: Counter<string>);
    getAllCity({ inicio, pageSize }: PaginationDto): Promise<{
        data: CityEntity[];
        count: number;
    }>;
    getCityById(id: number): Promise<CityDTO>;
    createCity(cityDTO: CityDTO): Promise<CityDTO & CityEntity>;
    updateCity(id: number, cityDTO: CityDTO): Promise<CityDTO | any>;
    deleteCity(id: number): Promise<import("typeorm").DeleteResult>;
}
