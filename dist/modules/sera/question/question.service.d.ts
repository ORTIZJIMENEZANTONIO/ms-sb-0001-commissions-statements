import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { QuestionEntity } from './entities/question.entity';
import { QuestionDto } from './dto/question.dto';
export declare class QuestionService {
    private questionRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(questionRepository: Repository<QuestionEntity>, logger: Logger, counter: Counter<string>);
    createQuestion(questionDto: QuestionDto): Promise<QuestionDto & QuestionEntity>;
    getAllQuestions({ inicio, pageSize }: PaginationDto): Promise<{
        data: QuestionEntity[];
        count: number;
    }>;
    getQuestionById(id: number): Promise<QuestionEntity>;
    updateQuestion(id: number, questionDto: QuestionDto): Promise<false | QuestionEntity>;
    deleteQuestion(id: number): Promise<import("typeorm").DeleteResult>;
}
