import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { StateOfRepublicEntity } from './entities/state-of-republic.entity';
import { StateOfRepublicDto } from './dto/state-of-republic.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StateOfRepublicService {
    private stateRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(stateRepository: Repository<StateOfRepublicEntity>, logger: Logger, counter: Counter<string>);
    createStateOfRepublic(stateOfRepublicDto: StateOfRepublicDto): Promise<StateOfRepublicDto & StateOfRepublicEntity>;
    getAllStatesOfRepublic({ inicio, pageSize }: PaginationDto): Promise<{
        data: StateOfRepublicEntity[];
        count: number;
    }>;
    getStateOfRepublicByStateCode(stateCode: string): Promise<false | StateOfRepublicEntity>;
    updateStateOfRepublic(stateCode: string, stateOfRepublicDto: StateOfRepublicDto): Promise<false | StateOfRepublicEntity>;
    deleteStateOfRepublic(stateCode: string): Promise<import("typeorm").DeleteResult>;
}
