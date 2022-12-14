import { Logger } from 'winston';
import { DeductiveVerificationService } from './deductive-verification.service';
import { CreateDeductiveVerificationDto } from './dto/create-deductive-verification.dto';
import { UpdateDeductiveVerificationDto } from './dto/update-deductive-verification.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DeductiveVerificationController {
    private readonly deductiveVerificationService;
    private readonly logger;
    constructor(deductiveVerificationService: DeductiveVerificationService, logger: Logger);
    createDeductiveVerificationFound(deductiveVerificationDto: CreateDeductiveVerificationDto): Promise<(CreateDeductiveVerificationDto & import("./entities/deductive-verification.entity").DeductiveVerificationEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllDeductiveVerificationFounds({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/deductive-verification.entity").DeductiveVerificationEntity[];
        count: number;
    }>;
    getDeductiveVerificationById(id: number): Promise<import("./entities/deductive-verification.entity").DeductiveVerificationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateDeductiveVerification(deductiveData: UpdateDeductiveVerificationDto & CreateDeductiveVerificationDto): Promise<import("./entities/deductive-verification.entity").DeductiveVerificationEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteDeductiveVerification(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
