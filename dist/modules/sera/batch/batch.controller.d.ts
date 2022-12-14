import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BatchService } from './batch.service';
import { BatchDTO } from './dto/batch.dto';
export declare class BatchController {
    private readonly batchService;
    constructor(batchService: BatchService);
    getAllBatchs(pagination: PaginationDto): Promise<{
        data: import("./entity/batch.entity").BatchEntity[];
        count: number;
    }>;
    getBatchById(id: number): Promise<BatchDTO>;
    createBatch(batchDTO: BatchDTO): Promise<(BatchDTO & import("./entity/batch.entity").BatchEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateBatch(batchDTO: BatchDTO): Promise<any>;
    deleteBatch(id_batch: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
