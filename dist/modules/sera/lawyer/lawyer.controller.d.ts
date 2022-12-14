import { Logger } from 'winston';
import { LawyerService } from './lawyer.service';
import { LawyerDto } from './dto/lawyer.dto';
import { UpdateLawyerDto } from './dto/update-laywer.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class LawyerController {
    private readonly lawyerService;
    private readonly logger;
    constructor(lawyerService: LawyerService, logger: Logger);
    createLawyer(lawyerDto: LawyerDto): Promise<(LawyerDto & import("./entities/laywer.entity").LawyerEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllLawyers({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/laywer.entity").LawyerEntity[];
        count: number;
    }>;
    getLawyerById(id: number): Promise<import("./entities/laywer.entity").LawyerEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateLawyer(data: UpdateLawyerDto & LawyerDto): Promise<import("./entities/laywer.entity").LawyerEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteLawyer(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
