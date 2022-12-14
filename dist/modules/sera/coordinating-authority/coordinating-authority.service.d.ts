import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { CoordinatingAuthorityEntity } from './entities/coordinating-authority.entity';
import { CoordinatingAuthorityDto } from './dto/coordinating-authority.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class CoordinatingAuthorityService {
    private coordinatingAuthorityRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(coordinatingAuthorityRepository: Repository<CoordinatingAuthorityEntity>, logger: Logger, counter: Counter<string>);
    createCoordinatingAuthority(coordinatingAuthorityDto: CoordinatingAuthorityDto): Promise<CoordinatingAuthorityDto & CoordinatingAuthorityEntity>;
    getAllCoordinatingAuthorities({ inicio, pageSize }: PaginationDto): Promise<{
        data: CoordinatingAuthorityEntity[];
        count: number;
    }>;
    getCoordinatingAuthorityById(id: number): Promise<CoordinatingAuthorityEntity>;
    updateCoordinatingAuthority(id: number, coordinatingAuthorityDto: CoordinatingAuthorityDto): Promise<false | CoordinatingAuthorityEntity>;
    deleteCoordinatingAuthority(id: number): Promise<import("typeorm").DeleteResult>;
}
