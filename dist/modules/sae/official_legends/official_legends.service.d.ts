import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { OfficialLegendsDto } from './dto/official_legends.dto';
import { OfficialLegendsEntity } from './entity/official_legends.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class OfficialLegendsService {
    private officialLegendsEntity;
    private readonly logger;
    counter: Counter<string>;
    constructor(officialLegendsEntity: Repository<OfficialLegendsEntity>, logger: Logger, counter: Counter<string>);
    getAllOfficialLegends({ inicio, pageSize }: PaginationDto): Promise<{
        data: OfficialLegendsEntity[];
        count: number;
    }>;
    createOfficialLegend(officialLegendsDto: OfficialLegendsDto): Promise<OfficialLegendsDto & OfficialLegendsEntity>;
    findOfficialLegend(id: number): Promise<OfficialLegendsEntity>;
    updateOfficialLegend(officialLegendsDto: OfficialLegendsDto): Promise<false | OfficialLegendsEntity>;
    deleteOfficialLegend(id: number): Promise<false | OfficialLegendsEntity>;
}
