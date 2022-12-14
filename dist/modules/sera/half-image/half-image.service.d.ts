import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { HalfImageDTO } from './dto/half-image.dto';
import { HalfImageEntity } from './entity/half-image.entity';
export declare class HalfImageService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<HalfImageEntity>, logger: Logger, counter: Counter<string>);
    getAllHalfImage({ inicio, pageSize }: PaginationDto): Promise<{
        data: HalfImageEntity[];
        count: number;
    }>;
    getHalfImageById(id: number): Promise<HalfImageDTO>;
    createHalfImage(halfImageDTO: HalfImageDTO): Promise<HalfImageDTO & HalfImageEntity>;
    updateHalfImage(id: number, halfImageDTO: HalfImageDTO): Promise<HalfImageDTO | any>;
    deleteHalfImage(id: number): Promise<import("typeorm").DeleteResult>;
}
