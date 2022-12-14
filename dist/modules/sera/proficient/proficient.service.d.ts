import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { Repository } from 'typeorm';
import { ProficientEntity } from './entity/proficient.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ProficientDTO } from './dto/proficient.dto';
export declare class ProficientService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ProficientEntity>, logger: Logger, counter: Counter<string>);
    getAllProficient({ inicio, pageSize }: PaginationDto): Promise<{
        data: ProficientEntity[];
        count: number;
    }>;
    getProficientById(id: number): Promise<ProficientDTO>;
    createProficient(proficientDTO: ProficientDTO): Promise<ProficientDTO & ProficientEntity>;
    updateProficient(id: number, proficientDTO: ProficientDTO): Promise<ProficientDTO | any>;
    deleteProficient(id: number): Promise<import("typeorm").DeleteResult>;
}
