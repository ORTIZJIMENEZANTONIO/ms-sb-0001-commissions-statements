import { Logger } from '@nestjs/common';
import { Counter } from "prom-client";
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { PaymentsConceptDTO } from './dto/payment-concept.dto';
import { PaymentsConceptEntity } from './entity/payments-concept.entity';
export declare class PaymentsConceptService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<PaymentsConceptEntity>, logger: Logger, counter: Counter<string>);
    getAllPaymentsConcept({ inicio, pageSize }: PaginationDto): Promise<{
        data: PaymentsConceptEntity[];
        count: number;
    }>;
    getPaymentsConceptById(id: number): Promise<PaymentsConceptDTO>;
    createPaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO): Promise<PaymentsConceptDTO & PaymentsConceptEntity>;
    updatePaymentsConcept(id: number, paymentsConceptDTO: PaymentsConceptDTO): Promise<PaymentsConceptDTO | any>;
    deletePaymentsConcept(id: number): Promise<import("typeorm").DeleteResult>;
}
