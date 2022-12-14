import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { GeneralStatusEntity } from './entities/general-status.entity';
import { GeneralStatusDto } from './dto/general-status.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class GeneralStatusService {
    private generalStateRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(generalStateRepository: Repository<GeneralStatusEntity>, logger: Logger, counter: Counter<string>);
    createGeneralStatus(generalStatusDto: GeneralStatusDto): Promise<GeneralStatusDto & GeneralStatusEntity>;
    getAllGeneralStatus({ inicio, pageSize }: PaginationDto): Promise<{
        data: GeneralStatusEntity[];
        count: number;
    }>;
    getGeneralStatusByStatusGeneral(statusGeneral: string): Promise<GeneralStatusEntity>;
    updateGeneralStatus(statusGeneral: string, generalStatusDto: GeneralStatusDto): Promise<false | GeneralStatusEntity>;
    deleteGeneralStatus(statusGeneral: string): Promise<import("typeorm").DeleteResult>;
}
