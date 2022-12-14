import { LawyerDto } from "./lawyer.dto";
declare const UpdateLawyerDto_base: import("@nestjs/common").Type<Partial<LawyerDto>>;
export declare class UpdateLawyerDto extends UpdateLawyerDto_base {
    idToUpdate: number | null;
}
export {};
