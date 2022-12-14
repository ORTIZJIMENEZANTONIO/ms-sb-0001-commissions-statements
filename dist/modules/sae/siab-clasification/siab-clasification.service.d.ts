import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SiabClasificationEntity } from './entities/siab-clasification.entity';
import { SiabClasificationDto } from './dto/siab-clasification.dto';
export declare class SiabClasificationService {
    private siabClasificationRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(siabClasificationRepository: Repository<SiabClasificationEntity>, logger: Logger, counter: Counter<string>);
    createSiabClasification(siabClasificationDto: SiabClasificationDto): Promise<SiabClasificationDto & SiabClasificationEntity>;
    getAllSiabClasifications({ inicio, pageSize }: PaginationDto): Promise<{
        data: SiabClasificationEntity[];
        count: number;
    }>;
    getSiabClasificationById(id: number): Promise<SiabClasificationEntity>;
    updateSiabClasification(id: number, siabClasificationDto: SiabClasificationDto): Promise<false | SiabClasificationEntity>;
    deleteSiabClasification(id: number): Promise<import("typeorm").DeleteResult>;
}
