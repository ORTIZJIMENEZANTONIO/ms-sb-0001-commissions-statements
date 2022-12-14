import { Logger } from '@nestjs/common';
import { Counter } from "prom-client";
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { SatSaeClassificationDTO } from './dto/satsae-classification.dto';
import { SatSaeClassificationEntity } from './entity/satsae-classification.entity';
export declare class SatsaeClassificationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<SatSaeClassificationEntity>, logger: Logger, counter: Counter<string>);
    getAllSatSaeClassification({ inicio, pageSize }: PaginationDto): Promise<{
        data: SatSaeClassificationEntity[];
        count: number;
    }>;
    getSatSaeClassificationById(id: number): Promise<SatSaeClassificationDTO>;
    createSatSaeClassification(satSaeClassificationDTO: SatSaeClassificationDTO): Promise<SatSaeClassificationDTO & SatSaeClassificationEntity>;
    updateSatSaeClassification(id: number, satSaeClassificationDTO: SatSaeClassificationDTO): Promise<SatSaeClassificationDTO | any>;
    deleteSatSaeClassification(id: number): Promise<import("typeorm").DeleteResult>;
}
