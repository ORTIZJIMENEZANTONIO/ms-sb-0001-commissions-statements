import { Logger } from 'winston';
import { BankService } from './bank.service';
import { BankDto } from './dto/bank.dto';
import { UpdatebankDto } from './dto/update-bank.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class BankController {
    private readonly bankService;
    private readonly logger;
    constructor(bankService: BankService, logger: Logger);
    createbank(bankDto: BankDto): Promise<(BankDto & import("./entities/bank.entity").BankEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllBankes({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/bank.entity").BankEntity[];
        count: number;
    }>;
    getBankByCode(code: string): Promise<import("./entities/bank.entity").BankEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updatebank(data: UpdatebankDto & BankDto): Promise<import("./entities/bank.entity").BankEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deletebank(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
