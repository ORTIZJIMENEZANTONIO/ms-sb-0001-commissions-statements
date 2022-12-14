import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { AuthorityEntity } from './entities/authority.entity';
import { AuthorityDto } from './dto/authority.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AuthorityService {
    private authorityRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(authorityRepository: Repository<AuthorityEntity>, logger: Logger, counter: Counter<string>);
    createAuthority(authorityDto: AuthorityDto): Promise<AuthorityDto & AuthorityEntity>;
    getAllAuthorities({ inicio, pageSize }: PaginationDto): Promise<{
        data: AuthorityEntity[];
        count: number;
    }>;
    getAuthorityById(id: number): Promise<AuthorityEntity>;
    updateAuthority(code: number, authorityDto: AuthorityDto): Promise<false | AuthorityEntity>;
    deleteAuthority(code: number): Promise<import("typeorm").DeleteResult>;
}
