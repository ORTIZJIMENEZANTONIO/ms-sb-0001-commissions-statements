import { SeriesDto } from "./series.dto";
declare const UpdateSeriesDto_base: import("@nestjs/common").Type<Partial<SeriesDto>>;
export declare class UpdateSeriesDto extends UpdateSeriesDto_base {
    codeToUpdate: string;
}
export {};
