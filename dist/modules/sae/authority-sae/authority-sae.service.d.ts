import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { AuthoritySaeEntity } from './entities/authority-sae.entity';
import { AuthoritySaeDto } from './dto/authority-sae.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AuthoritySaeService {
    private authoritySaeRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(authoritySaeRepository: Repository<AuthoritySaeEntity>, logger: Logger, counter: Counter<string>);
    createAuthoritySae(authoritySaeDto: AuthoritySaeDto): Promise<AuthoritySaeDto & AuthoritySaeEntity>;
    getAllAuthoritiesSae({ inicio, pageSize }: PaginationDto): Promise<{
        data: AuthoritySaeEntity[];
        count: number;
    }>;
    getAuthoritySaeById(id: number): Promise<AuthoritySaeEntity>;
    updateAuthoritySae(id: number, authoritySaeDto: AuthoritySaeDto): Promise<false | AuthoritySaeEntity>;
    deleteAuthoritySae(code: number): Promise<import("typeorm").DeleteResult>;
}
