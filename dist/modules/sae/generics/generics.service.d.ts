import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { GenericsDto } from './dto/generics.dto';
import { genericsEntity } from './entity/generics.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class GenericsService {
    private generics;
    private readonly logger;
    counter: Counter<string>;
    constructor(generics: Repository<genericsEntity>, logger: Logger, counter: Counter<string>);
    getAllGenerics({ inicio, pageSize }: PaginationDto): Promise<{
        data: genericsEntity[];
        count: number;
    }>;
    createGeneric(genericDto: GenericsDto): Promise<GenericsDto & genericsEntity>;
    findGeneric(name: string): Promise<genericsEntity>;
    updateGeneric(GenericsDto: any): Promise<false | genericsEntity>;
    deleteGeneric(name: string): Promise<false | genericsEntity>;
}
