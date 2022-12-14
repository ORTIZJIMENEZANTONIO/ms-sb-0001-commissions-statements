import { Logger } from 'winston';
import { CatParagraphsService } from './cat_paragraphs.service';
import { CatParagraphsDto } from './dto/catparagraphs.dto';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class CatParagraphsController {
    private readonly catParagraphsService;
    private readonly logger;
    constructor(catParagraphsService: CatParagraphsService, logger: Logger);
    getAllCatParagraphs(pagination: PaginationDto): Promise<{
        data: import("./entity/catparagraphs.entity").CatParagraphsEntity[];
        count: number;
    }>;
    createCatParagraphs(catParagraphsDto: CatParagraphsDto): Promise<(CatParagraphsDto & import("./entity/catparagraphs.entity").CatParagraphsEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    findCatParagraph(id: number): Promise<import("./entity/catparagraphs.entity").CatParagraphsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateCatParagraph(catParagraphsDto: CatParagraphsDto): Promise<import("./entity/catparagraphs.entity").CatParagraphsEntity | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    deleteCatParagraph(id: number): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
