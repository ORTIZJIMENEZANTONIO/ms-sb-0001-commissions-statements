import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { MunicipalityDTO } from './dto/municipality.dto';
import { MunicipalityEntity } from './entity/municipality.entity';
export declare class MunicipalityService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<MunicipalityEntity>, logger: Logger, counter: Counter<string>);
    getAllMunicipality({ inicio, pageSize }: PaginationDto): Promise<{
        data: MunicipalityEntity[];
        count: number;
    }>;
    getMunicipalityById(id: number): Promise<MunicipalityDTO>;
    createMunicipality(municipalityDTO: MunicipalityDTO): Promise<MunicipalityDTO & MunicipalityEntity>;
    updateMunicipality(id: number, municipalityDTO: MunicipalityDTO): Promise<MunicipalityDTO | any>;
    deleteMunicipality(id: number): Promise<import("typeorm").DeleteResult>;
}
