import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { MediumPhotographyEntity } from './entity/medium-photography.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MediumPhotographyDTO } from './dto/medium-photography.dto';
export declare class MediumPhotographyService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<MediumPhotographyEntity>, logger: Logger, counter: Counter<string>);
    getAllMediumPhotography({ inicio, pageSize }: PaginationDto): Promise<{
        data: MediumPhotographyEntity[];
        count: number;
    }>;
    getMediumPhotographyById(id: number): Promise<MediumPhotographyDTO>;
    createMediumPhotography(mediumPhotographyDTO: MediumPhotographyDTO): Promise<MediumPhotographyDTO & MediumPhotographyEntity>;
    updateMediumPhotography(id: number, mediumPhotographyDTO: MediumPhotographyDTO): Promise<MediumPhotographyDTO | any>;
    deleteMediumPhotography(id: number): Promise<import("typeorm").DeleteResult>;
}
