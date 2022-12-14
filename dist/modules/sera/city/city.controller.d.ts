import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityService } from './city.service';
import { CityDTO } from './dto/city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getAllCitys(pagination: PaginationDto): Promise<{
        data: import("./entity/city.entity").CityEntity[];
        count: number;
    }>;
    getCityById(id: number): Promise<CityDTO>;
    createCity(cityDTO: CityDTO): Promise<(CityDTO & import("./entity/city.entity").CityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateCity(cityDTO: CityDTO): Promise<any>;
    deleteCity(id_city: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
