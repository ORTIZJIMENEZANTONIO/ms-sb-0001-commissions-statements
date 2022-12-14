import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ScoreDto } from './dto/score.dto';
import { ScoreService } from './score.service';
import { UpdateScoreDto } from './dto/update-score.dto';
export declare class ScoreController {
    private readonly scoreService;
    private readonly logger;
    constructor(scoreService: ScoreService, logger: Logger);
    createScore(scoreDto: ScoreDto): Promise<(ScoreDto & import("./entities/score.entity").ScoreEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllScores(pagination: PaginationDto): Promise<{
        data: import("./entities/score.entity").ScoreEntity[];
        count: number;
    }>;
    getScoreByCode(code: string): Promise<import("./entities/score.entity").ScoreEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateScore(data: UpdateScoreDto & ScoreDto): Promise<import("./entities/score.entity").ScoreEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteScore(code: string): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
