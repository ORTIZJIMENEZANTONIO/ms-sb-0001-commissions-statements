import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { LocalityDTO } from './dto/locality.dto';
import { LocalityEntity } from './entity/locality.entity';
export declare class LocalityService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<LocalityEntity>, logger: Logger, counter: Counter<string>);
    getAllLocality({ inicio, pageSize }: PaginationDto): Promise<{
        data: LocalityEntity[];
        count: number;
    }>;
    getLocalityById(id: number): Promise<LocalityDTO>;
    createLocality(localityDTO: LocalityDTO): Promise<LocalityDTO & LocalityEntity>;
    updateLocality(id: number, localityDTO: LocalityDTO): Promise<false | LocalityEntity>;
    deleteLocality(id: number): Promise<import("typeorm").DeleteResult>;
}
