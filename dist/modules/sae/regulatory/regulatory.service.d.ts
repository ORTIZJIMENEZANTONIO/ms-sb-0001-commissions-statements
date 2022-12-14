import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { RegulatoryEntity } from './entity/regulatory.entity';
import { RegulatoryDTO } from './dto/regulatory.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class RegulatoryService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<RegulatoryEntity>, logger: Logger, counter: Counter<string>);
    getAllRegulatory({ inicio, pageSize }: PaginationDto): Promise<{
        data: RegulatoryEntity[];
        count: number;
    }>;
    getRegulatoryById(id: number): Promise<RegulatoryDTO>;
    createRegulatory(regulatoryDTO: RegulatoryDTO): Promise<RegulatoryDTO & RegulatoryEntity>;
    updateRegulatory(id: number, regulatoryDTO: RegulatoryDTO): Promise<RegulatoryDTO | any>;
    deleteRegulatory(id: number): Promise<import("typeorm").DeleteResult>;
}
