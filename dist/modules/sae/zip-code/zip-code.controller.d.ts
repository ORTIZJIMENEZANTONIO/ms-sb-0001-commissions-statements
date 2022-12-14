import { Logger } from 'winston';
import { ZipCodeService } from './zip-code.service';
import { CreateZipCodeDto } from './dto/create-zip-code.dto';
import { UpdateZipCodeDto } from './dto/update-zip-code.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class ZipCodeController {
    private readonly zipCodeService;
    private readonly logger;
    constructor(zipCodeService: ZipCodeService, logger: Logger);
    createZipCode(createZipCodeDto: CreateZipCodeDto): Promise<CreateZipCodeDto & import("./entities/zipCodeEntity.entity").ZipCodeEntity> | {
        statusCode: number;
        message: string;
        error: string;
    };
    getAllZipCodes({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/zipCodeEntity.entity").ZipCodeEntity[];
        count: number;
    }>;
    getZipCodeByCode(code: string): Promise<import("./entities/zipCodeEntity.entity").ZipCodeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateZipCode(zipCodeData: UpdateZipCodeDto & CreateZipCodeDto): Promise<import("./entities/zipCodeEntity.entity").ZipCodeEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteZipCode(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
