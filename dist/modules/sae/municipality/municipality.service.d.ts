import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { MunicipalityDto } from './dto/municipality.dto';
import { MunicipalityEntity } from './entity/municipality.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class MunicipalityService {
    private municipality;
    private readonly logger;
    counter: Counter<string>;
    constructor(municipality: Repository<MunicipalityEntity>, logger: Logger, counter: Counter<string>);
    getAllMunicipalitys({ inicio, pageSize }: PaginationDto): Promise<{
        data: MunicipalityEntity[];
        count: number;
    }>;
    createMunicipality(municipalityDto: MunicipalityDto): Promise<MunicipalityDto & MunicipalityEntity>;
    findMunicipality(key: string): Promise<MunicipalityEntity>;
    updateMunicipality(municipalityDto: any): Promise<false | MunicipalityEntity>;
    deleteMunicipality(key: string): Promise<import("typeorm").DeleteResult>;
}
