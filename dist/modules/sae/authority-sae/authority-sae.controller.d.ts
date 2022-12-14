import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AuthoritySaeService } from './authority-sae.service';
import { AuthoritySaeDto } from './dto/authority-sae.dto';
import { UpdateAuthorityDto } from 'src/modules/sera/authority-sera/dto/update-authority.dto';
export declare class AuthoritySaeController {
    private readonly authoritySaeService;
    private readonly logger;
    constructor(authoritySaeService: AuthoritySaeService, logger: Logger);
    createAuthoritySae(authoritySaeDto: AuthoritySaeDto): Promise<(AuthoritySaeDto & import("./entities/authority-sae.entity").AuthoritySaeEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllAuthoritiesSae(pagination: PaginationDto): Promise<{
        data: import("./entities/authority-sae.entity").AuthoritySaeEntity[];
        count: number;
    }>;
    getAuthoritySaeById(id: number): Promise<import("./entities/authority-sae.entity").AuthoritySaeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateAuthoritySae(data: UpdateAuthorityDto & AuthoritySaeDto): Promise<import("./entities/authority-sae.entity").AuthoritySaeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteAuthoritySae(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
