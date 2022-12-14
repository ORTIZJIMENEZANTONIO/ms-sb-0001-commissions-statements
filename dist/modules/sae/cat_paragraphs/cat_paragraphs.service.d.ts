import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Counter } from 'prom-client';
import { CatParagraphsDto } from './dto/catparagraphs.dto';
import { CatParagraphsEntity } from './entity/catparagraphs.entity';
import { PaginationDto } from 'src/shared/dto/pagination';
export declare class CatParagraphsService {
    private catParagraphsEntity;
    private readonly logger;
    counter: Counter<string>;
    constructor(catParagraphsEntity: Repository<CatParagraphsEntity>, logger: Logger, counter: Counter<string>);
    getAllCatParagraphs({ inicio, pageSize }: PaginationDto): Promise<{
        data: CatParagraphsEntity[];
        count: number;
    }>;
    createCatParagraphs(catParagraphsDto: CatParagraphsDto): Promise<CatParagraphsDto & CatParagraphsEntity>;
    findCatParagraph(id: number): Promise<CatParagraphsEntity>;
    updateCatParagraph(catParagraphsDto: CatParagraphsDto): Promise<false | CatParagraphsEntity>;
    deleteCatParagraph(id: number): Promise<import("typeorm").DeleteResult>;
}
