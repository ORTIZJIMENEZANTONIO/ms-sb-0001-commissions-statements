import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RegulatoryDTO } from './dto/regulatory.dto';
import { RegulatoryEntity } from './entity/regulatory.entity';
import { RegulatoryService } from './regulatory.service';
export declare class RegulatoryController {
    private readonly regulatoryService;
    private readonly logger;
    constructor(regulatoryService: RegulatoryService, logger: Logger);
    getAllRegulatorys(pagination: PaginationDto): Promise<{
        data: RegulatoryEntity[];
        count: number;
    }>;
    getRegulatoryById(id: number): Promise<RegulatoryDTO>;
    createRegulatory(regulatoryDTO: RegulatoryDTO): Promise<(RegulatoryDTO & RegulatoryEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateRegulatory(regulatoryDTO: RegulatoryDTO): Promise<any>;
    deleteRegulatory(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
