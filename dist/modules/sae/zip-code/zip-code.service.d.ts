import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { ZipCodeEntity } from './entities/zipCodeEntity.entity';
import { CreateZipCodeDto } from './dto/create-zip-code.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class ZipCodeService {
    private zipCodeRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(zipCodeRepository: Repository<ZipCodeEntity>, logger: Logger, counter: Counter<string>);
    createZipCode(createZipCodeDto: CreateZipCodeDto): Promise<CreateZipCodeDto & ZipCodeEntity>;
    getAllZipCodes({ inicio, pageSize }: PaginationDto): Promise<{
        data: ZipCodeEntity[];
        count: number;
    }>;
    getOneZipCodeByCode(code: string): Promise<ZipCodeEntity>;
    updateZipCode(code: string, updateZipCodeDto: CreateZipCodeDto): Promise<false | ZipCodeEntity>;
    deleteZipCode(code: string): Promise<import("typeorm").DeleteResult>;
}
