import { Logger } from 'winston';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionController {
    private readonly questionService;
    private readonly logger;
    constructor(questionService: QuestionService, logger: Logger);
    createQuestion(questionDto: QuestionDto): Promise<(QuestionDto & import("./entities/question.entity").QuestionEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllQuestions(pagination: PaginationDto): Promise<{
        data: import("./entities/question.entity").QuestionEntity[];
        count: number;
    }>;
    getQuestionById(id: number): Promise<import("./entities/question.entity").QuestionEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateQuestion(data: QuestionDto & UpdateQuestionDto): Promise<import("./entities/question.entity").QuestionEntity | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteQuestion(id: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
