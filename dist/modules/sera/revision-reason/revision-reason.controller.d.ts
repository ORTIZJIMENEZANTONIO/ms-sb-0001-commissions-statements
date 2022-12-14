import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RevisionReasonDTO } from './dto/revision-reason.dto';
import { RevisionReasonService } from './revision-reason.service';
export declare class RevisionReasonController {
    private readonly revisionReasonService;
    constructor(revisionReasonService: RevisionReasonService);
    getAllRevisionReasons(pagination: PaginationDto): Promise<{
        data: import("./entity/revision-reason.entity").RevisionReasonEntity[];
        count: number;
    }>;
    getRevisionReasonById(id: number): Promise<RevisionReasonDTO>;
    createRevisionReason(revisionReasonDTO: RevisionReasonDTO): Promise<(RevisionReasonDTO & import("./entity/revision-reason.entity").RevisionReasonEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateRevisionReason(revisionReasonDTO: RevisionReasonDTO): Promise<any>;
    deleteRevisionReason(id_revisionReason: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
