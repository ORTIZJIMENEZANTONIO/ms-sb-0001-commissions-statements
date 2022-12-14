import { QuestionDto } from "./question.dto";
declare const UpdateQuestionDto_base: import("@nestjs/common").Type<Partial<QuestionDto>>;
export declare class UpdateQuestionDto extends UpdateQuestionDto_base {
    idToUpdate: number;
}
export {};
