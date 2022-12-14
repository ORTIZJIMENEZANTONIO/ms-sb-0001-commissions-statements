import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { StationEntity } from './entities/station.entity';
import { StationDto } from './dto/station.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StationService {
    private stationRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(stationRepository: Repository<StationEntity>, logger: Logger, counter: Counter<string>);
    createStation(stationDto: StationDto): Promise<StationDto & StationEntity>;
    getAllStations({ inicio, pageSize }: PaginationDto): Promise<{
        data: StationEntity[];
        count: number;
    }>;
    getStationById(id: number): Promise<StationEntity>;
    updateStation(id: number, updateStationDto: StationDto): Promise<false | StationEntity>;
    deleteStation(id: number): Promise<false | StationEntity>;
}
