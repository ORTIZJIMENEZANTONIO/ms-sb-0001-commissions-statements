import { Logger } from '@nestjs/common';
import { Counter } from "prom-client";
import { Repository } from 'typeorm';
import { DepartamentDTO } from './dto/departament.dto';
import { DepartamentEntity } from './entity/departament.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DepartamentService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<DepartamentEntity>, logger: Logger, counter: Counter<string>);
    getAllDepartament({ inicio, pageSize }: PaginationDto): Promise<{
        data: DepartamentEntity[];
        count: number;
    }>;
    getDepartamentById(id: number): Promise<DepartamentDTO>;
    createDepartament(departamentDTO: DepartamentDTO): Promise<DepartamentDTO & DepartamentEntity>;
    updateDepartament(id: number, departamentDTO: DepartamentDTO): Promise<DepartamentDTO | any>;
    deleteDepartament(id: number): Promise<import("typeorm").DeleteResult>;
}
