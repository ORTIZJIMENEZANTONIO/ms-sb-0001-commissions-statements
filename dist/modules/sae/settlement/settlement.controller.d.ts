import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SettlementService } from './settlement.service';
import { SettlementDto } from './dto/settlement.dto';
import { UpdateSettlementDto } from './dto/update-settlement.dto';
export declare class SettlementController {
    private readonly settlementService;
    private readonly logger;
    constructor(settlementService: SettlementService, logger: Logger);
    createSettlement(settlementDto: SettlementDto): Promise<(SettlementDto & import("./entities/settlement.entity").SettlementEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllSettlements(pagination: PaginationDto): Promise<{
        data: import("./entities/settlement.entity").SettlementEntity[];
        count: number;
    }>;
    getSettlementByCode(code: string): Promise<import("./entities/settlement.entity").SettlementEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateSettlement(data: UpdateSettlementDto & SettlementDto): Promise<import("./entities/settlement.entity").SettlementEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteSettlement(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
