import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { NonDeliveryReasonsDto } from './dto/nondeliveryreasons.dto';
import { NonDeliveryReasonsEntity } from './entity/nondeliveryreasons.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class NonDeliveryReasonsService {
    private nonDeliveryReasonsEntity;
    private readonly logger;
    counter: Counter<string>;
    constructor(nonDeliveryReasonsEntity: Repository<NonDeliveryReasonsEntity>, logger: Logger, counter: Counter<string>);
    getAllNonDeliveryReasons({ inicio, pageSize }: PaginationDto): Promise<{
        data: NonDeliveryReasonsEntity[];
        count: number;
    }>;
    createNonDeliveryReason(nonDeliveryReasonsDto: NonDeliveryReasonsDto): Promise<NonDeliveryReasonsDto & NonDeliveryReasonsEntity>;
    findNonDeliveryReason(id: number): Promise<NonDeliveryReasonsEntity>;
    updateNonDeliveryReason(nonDeliveryReasonsDto: NonDeliveryReasonsDto): Promise<false | NonDeliveryReasonsEntity>;
    deleteNonDeliveryReason(id: number): Promise<false | NonDeliveryReasonsEntity>;
}
