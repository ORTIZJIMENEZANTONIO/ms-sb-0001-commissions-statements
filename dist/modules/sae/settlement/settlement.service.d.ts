import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SettlementEntity } from './entities/settlement.entity';
import { SettlementDto } from './dto/settlement.dto';
export declare class SettlementService {
    private settlementRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(settlementRepository: Repository<SettlementEntity>, logger: Logger, counter: Counter<string>);
    createSettlement(settlementDto: SettlementDto): Promise<SettlementDto & SettlementEntity>;
    getAllSettlements({ inicio, pageSize }: PaginationDto): Promise<{
        data: SettlementEntity[];
        count: number;
    }>;
    getSettlementByCode(code: string): Promise<SettlementEntity>;
    updateSettlement(code: string, settlementDto: SettlementDto): Promise<false | SettlementEntity>;
    deleteSettlement(code: string): Promise<import("typeorm").DeleteResult>;
}
