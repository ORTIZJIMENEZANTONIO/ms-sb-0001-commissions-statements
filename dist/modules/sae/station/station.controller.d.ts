import { Logger } from 'winston';
import { StationService } from './station.service';
import { StationDto } from './dto/station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StationController {
    private readonly stationService;
    private readonly logger;
    constructor(stationService: StationService, logger: Logger);
    createStation(stationDto: StationDto): Promise<StationDto & import("./entities/station.entity").StationEntity> | {
        statusCode: number;
        message: string;
        error: string;
    };
    getAllStations({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/station.entity").StationEntity[];
        count: number;
    }>;
    getStationByCode(id: number): Promise<import("./entities/station.entity").StationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateStation(stationData: UpdateStationDto & StationDto): Promise<import("./entities/station.entity").StationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteStation(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
