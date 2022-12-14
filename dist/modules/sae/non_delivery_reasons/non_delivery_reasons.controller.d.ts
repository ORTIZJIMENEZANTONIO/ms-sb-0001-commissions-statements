import { Logger } from 'winston';
import { NonDeliveryReasonsService } from './non_delivery_reasons.service';
import { NonDeliveryReasonsDto } from './dto/nondeliveryreasons.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class NonDeliveryReasonsController {
    private readonly nonDeliveryReasonsService;
    private readonly logger;
    constructor(nonDeliveryReasonsService: NonDeliveryReasonsService, logger: Logger);
    getAllLocalitys(paginationDto: PaginationDto): Promise<{
        data: import("./entity/nondeliveryreasons.entity").NonDeliveryReasonsEntity[];
        count: number;
    }>;
    createNonDeliveryReason(nonDeliveryReasonsDto: NonDeliveryReasonsDto): Promise<(NonDeliveryReasonsDto & import("./entity/nondeliveryreasons.entity").NonDeliveryReasonsEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findNonDeliveryReason(id: number): Promise<import("./entity/nondeliveryreasons.entity").NonDeliveryReasonsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateNonDeliveryReason(nonDeliveryReasonsDto: NonDeliveryReasonsDto): Promise<import("./entity/nondeliveryreasons.entity").NonDeliveryReasonsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteNonDeliveryReason(id: number): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
