import { GeneralStatusDto } from "./general-status.dto";
declare const UpdateGeneralStatusDto_base: import("@nestjs/common").Type<Partial<GeneralStatusDto>>;
export declare class UpdateGeneralStatusDto extends UpdateGeneralStatusDto_base {
    statusGeneralToUpdate: string;
}
export {};
