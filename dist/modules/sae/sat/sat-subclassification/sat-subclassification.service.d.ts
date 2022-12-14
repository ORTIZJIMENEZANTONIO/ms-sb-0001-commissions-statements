import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { SatSubClassificationEntity } from './entity/sat-subclassification.entity';
import { SatSubClassificationDTO } from './dto/sat-classification.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class SatSubclassificationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<SatSubClassificationEntity>, logger: Logger, counter: Counter<string>);
    getAllSatSubClassification({ inicio, pageSize }: PaginationDto): Promise<{
        data: SatSubClassificationEntity[];
        count: number;
    }>;
    getSatSubClassificationById(id: number): Promise<SatSubClassificationDTO>;
    createSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO): Promise<SatSubClassificationDTO & SatSubClassificationEntity>;
    updateSatSubClassification(id: number, satSubClassificationDTO: SatSubClassificationDTO): Promise<SatSubClassificationDTO | any>;
    deleteSatSubClassification(id: number): Promise<import("typeorm").DeleteResult>;
}
