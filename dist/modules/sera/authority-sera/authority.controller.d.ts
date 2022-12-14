import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AuthorityService } from './authority.service';
import { AuthorityDto } from './dto/authority.dto';
import { UpdateAuthorityDto } from './dto/update-authority.dto';
export declare class AuthorityController {
    private readonly authorityService;
    private readonly logger;
    constructor(authorityService: AuthorityService, logger: Logger);
    createAuthority(authorityDto: AuthorityDto): Promise<(AuthorityDto & import("./entities/authority.entity").AuthorityEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllAuthorities(pagination: PaginationDto): Promise<{
        data: import("./entities/authority.entity").AuthorityEntity[];
        count: number;
    }>;
    getAuthorityById(id: number): Promise<import("./entities/authority.entity").AuthorityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateAuthority(data: UpdateAuthorityDto & AuthorityDto): Promise<import("./entities/authority.entity").AuthorityEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteAuthority(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
