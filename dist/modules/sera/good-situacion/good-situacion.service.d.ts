import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { GoodSituacionDTO } from './dto/good-situacion.dto';
import { GoodSituacionEntity } from './entity/good-situacion.entity';
export declare class GoodSituacionService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<GoodSituacionEntity>, logger: Logger, counter: Counter<string>);
    getAllGoodSituacion({ inicio, pageSize }: PaginationDto): Promise<{
        data: GoodSituacionEntity[];
        count: number;
    }>;
    getGoodSituacionById(id: number): Promise<GoodSituacionDTO>;
    createGoodSituacion(goodSituacionDTO: GoodSituacionDTO): Promise<GoodSituacionDTO & GoodSituacionEntity>;
    updateGoodSituacion(id: number, goodSituacionDTO: GoodSituacionDTO): Promise<GoodSituacionDTO | any>;
    deleteGoodSituacion(id: number): Promise<import("typeorm").DeleteResult>;
}
