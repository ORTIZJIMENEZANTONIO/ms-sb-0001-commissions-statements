import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { FinalDateDto } from './dto/get-final-date.dto';
import { ComerTPenaltyEntity } from './entities/comer-tpenalty.entity';
import { ReleasePenaltyDto } from './dto/release-penalty.dto';
import { ComerClientEntity } from './entities/comer-client.entity';
import { ComerPenaltyHisEntity } from './entities/comer-penalty-his.entity';
import { ComerPenaltyEntity } from './entities/comer-penalty.entity';
import { UpdatePenaltyDto } from './dto/update-penaly.dto';
import { RegisterPenaltyDto } from './dto/register-penalty.dto';
import { ReversePenaltyDto } from './dto/reverse-penalty.dto';
import { ComerEventEntity } from './entities/comer-event.entity';
import { ComerLotEntity } from './entities/comer-lot.entity';
export declare class ComerPenaltyService {
    private entity;
    private entityHis;
    private entityClient;
    private entityTPenalty;
    private entityEvent;
    private entityLot;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerPenaltyEntity>, entityHis: Repository<ComerPenaltyHisEntity>, entityClient: Repository<ComerClientEntity>, entityTPenalty: Repository<ComerTPenaltyEntity>, entityEvent: Repository<ComerEventEntity>, entityLot: Repository<ComerLotEntity>, logger: Logger, counter: Counter<string>);
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
