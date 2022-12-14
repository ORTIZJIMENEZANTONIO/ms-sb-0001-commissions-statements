import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ServiceCatEntity } from './entities/service-cat.entity';
import { ServiceCatDto } from './dto/service-cat.dto';
export declare class ServiceCatService {
    private serviceRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(serviceRepository: Repository<ServiceCatEntity>, logger: Logger, counter: Counter<string>);
    createService(serviceCatDto: ServiceCatDto): Promise<ServiceCatDto & ServiceCatEntity>;
    getAllServices({ inicio, pageSize }: PaginationDto): Promise<{
        data: ServiceCatEntity[];
        count: number;
    }>;
    getServiceByCode(code: string): Promise<ServiceCatEntity>;
    updateService(code: string, serviceCatDto: ServiceCatDto): Promise<false | ServiceCatEntity>;
    deleteService(code: string): Promise<import("typeorm").DeleteResult>;
}
