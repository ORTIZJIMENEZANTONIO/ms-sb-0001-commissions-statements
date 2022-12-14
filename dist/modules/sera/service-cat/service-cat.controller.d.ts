import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ServiceCatDto } from './dto/service-cat.dto';
import { ServiceCatService } from './service-cat.service';
import { UpdateServiceCatDto } from './dto/update-service-cat.dto';
export declare class ServiceCatController {
    private readonly serviceCatService;
    private readonly logger;
    constructor(serviceCatService: ServiceCatService, logger: Logger);
    createServiceCat(serviceCatDto: ServiceCatDto): Promise<(ServiceCatDto & import("./entities/service-cat.entity").ServiceCatEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllServiceCats(pagination: PaginationDto): Promise<{
        data: import("./entities/service-cat.entity").ServiceCatEntity[];
        count: number;
    }>;
    getServiceByCode(code: string): Promise<import("./entities/service-cat.entity").ServiceCatEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateServiceCat(data: UpdateServiceCatDto & ServiceCatDto): Promise<import("./entities/service-cat.entity").ServiceCatEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteServiceCat(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
