import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { LocalityDto } from './dto/locality.dto';
import { localityEntity } from './entity/locality.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class LocalityService {
    private locality;
    private readonly logger;
    counter: Counter<string>;
    constructor(locality: Repository<localityEntity>, logger: Logger, counter: Counter<string>);
    getAllLocalitys({ inicio, pageSize }: PaginationDto): Promise<{
        data: localityEntity[];
        count: number;
    }>;
    createLocality(localityDto: LocalityDto): Promise<LocalityDto & localityEntity>;
    findLocality(key: string): Promise<localityEntity>;
    updateLocality(localityDto: any): Promise<false | localityEntity>;
    deleteLocality(key: string): Promise<import("typeorm").DeleteResult>;
}
