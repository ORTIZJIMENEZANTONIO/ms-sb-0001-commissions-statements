import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { SatClassificationEntity } from './entity/sat-classification.entity';
import { SatClassificationDTO } from './dto/sat-classification.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class SatClassificationService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<SatClassificationEntity>, logger: Logger, counter: Counter<string>);
    getAllSatClassification({ inicio, pageSize }: PaginationDto): Promise<{
        data: SatClassificationEntity[];
        count: number;
    }>;
    getSatClassificationById(id: number): Promise<SatClassificationDTO>;
    createSatClassification(satClassificationDTO: SatClassificationDTO): Promise<SatClassificationDTO & SatClassificationEntity>;
    updateSatClassification(id: number, satClassificationDTO: SatClassificationDTO): Promise<SatClassificationEntity | any>;
    deleteSatClassification(id: number): Promise<import("typeorm").DeleteResult>;
}
