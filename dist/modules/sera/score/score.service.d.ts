import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ScoreEntity } from './entities/score.entity';
import { ScoreDto } from './dto/score.dto';
export declare class ScoreService {
    private scoreRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(scoreRepository: Repository<ScoreEntity>, logger: Logger, counter: Counter<string>);
    createScore(scoreDto: ScoreDto): Promise<ScoreDto & ScoreEntity>;
    getAllScores({ inicio, pageSize }: PaginationDto): Promise<{
        data: ScoreEntity[];
        count: number;
    }>;
    getScoreByCode(code: string): Promise<ScoreEntity>;
    updateScore(code: string, scoreDto: ScoreDto): Promise<false | ScoreEntity>;
    deleteScore(code: string): Promise<import("typeorm").DeleteResult>;
}
