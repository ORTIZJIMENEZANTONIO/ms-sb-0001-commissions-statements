import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { BankEntity } from './entities/bank.entity';
import { BankDto } from './dto/bank.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class BankService {
    private bankRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(bankRepository: Repository<BankEntity>, logger: Logger, counter: Counter<string>);
    createBank(bankDto: BankDto): Promise<BankDto & BankEntity>;
    getAllBanks({ inicio, pageSize }: PaginationDto): Promise<{
        data: BankEntity[];
        count: number;
    }>;
    getBankByCode(code: string): Promise<BankEntity>;
    updateBank(code: string, bankDto: BankDto): Promise<false | BankEntity>;
    deleteBank(code: string): Promise<import("typeorm").DeleteResult>;
}
