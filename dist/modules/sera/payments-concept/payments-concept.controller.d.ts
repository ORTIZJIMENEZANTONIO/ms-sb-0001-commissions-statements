import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PaymentsConceptDTO } from './dto/payment-concept.dto';
import { PaymentsConceptService } from './payments-concept.service';
export declare class PaymentsConceptController {
    private readonly paymentsConceptService;
    constructor(paymentsConceptService: PaymentsConceptService);
    getAllPaymentsConcepts(pagination: PaginationDto): Promise<{
        data: import("./entity/payments-concept.entity").PaymentsConceptEntity[];
        count: number;
    }>;
    getPaymentsConceptById(id: number): Promise<PaymentsConceptDTO>;
    createPaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO): Promise<(PaymentsConceptDTO & import("./entity/payments-concept.entity").PaymentsConceptEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updatePaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO): Promise<any>;
    deletePaymentsConcept(id_paymentsConcept: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
