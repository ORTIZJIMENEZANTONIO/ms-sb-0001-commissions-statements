import { Logger } from 'winston';
import { ComerPenaltyService } from './comer-penalty.service';
import { FinalDateDto } from './dto/get-final-date.dto';
import { ReleasePenaltyDto } from './dto/release-penalty.dto';
import { UpdatePenaltyDto } from './dto/update-penaly.dto';
import { RegisterPenaltyDto } from './dto/register-penalty.dto';
import { ReversePenaltyDto } from './dto/reverse-penalty.dto';
export declare class ComerPenaltyController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerPenaltyService, logger: Logger);
    registerPenalty(data: RegisterPenaltyDto): Promise<any>;
    updatePenalty(data: UpdatePenaltyDto): Promise<{
        historicPenalty: string;
        penaltyDetails: string;
        clientsCatalogue: string;
        result: string;
    }>;
    releasePenalty(data: ReleasePenaltyDto): Promise<{
        historicPenalty: string;
        penaltyDetails: string;
        clientsCatalogue: string;
    }>;
    getFinalDate(data: FinalDateDto): Promise<Date>;
    penaltyReverse(data: ReversePenaltyDto): Promise<string | {
        message: string;
        status: number;
    }>;
}
