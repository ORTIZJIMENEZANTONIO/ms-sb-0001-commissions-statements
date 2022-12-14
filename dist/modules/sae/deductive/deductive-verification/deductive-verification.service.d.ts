import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { DeductiveVerificationEntity } from './entities/deductive-verification.entity';
import { CreateDeductiveVerificationDto } from './dto/create-deductive-verification.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class DeductiveVerificationService {
    private deductiveVerificationRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(deductiveVerificationRepository: Repository<DeductiveVerificationEntity>, logger: Logger, counter: Counter<string>);
    createDeductiveVerification(createDeductiveVerificationDto: CreateDeductiveVerificationDto): Promise<CreateDeductiveVerificationDto & DeductiveVerificationEntity>;
    getAllDeductivesVerifications({ inicio, pageSize }: PaginationDto): Promise<{
        data: DeductiveVerificationEntity[];
        count: number;
    }>;
    getDeductiveVerificationById(id: number): Promise<DeductiveVerificationEntity>;
    updateDeductiveVerification(deductiveIdToUpdate: number, createDeductiveVerificationDto: CreateDeductiveVerificationDto): Promise<false | DeductiveVerificationEntity>;
    deleteDeductiveVerification(id: number): Promise<import("typeorm").DeleteResult>;
}
