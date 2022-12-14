import { ScoreDto } from "./score.dto";
declare const UpdateScoreDto_base: import("@nestjs/common").Type<Partial<ScoreDto>>;
export declare class UpdateScoreDto extends UpdateScoreDto_base {
    codeToUpdate: string;
}
export {};
