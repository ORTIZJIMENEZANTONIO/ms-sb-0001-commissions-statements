import { ServiceCatDto } from "./service-cat.dto";
declare const UpdateServiceCatDto_base: import("@nestjs/common").Type<Partial<ServiceCatDto>>;
export declare class UpdateServiceCatDto extends UpdateServiceCatDto_base {
    codeToUpdate: string;
}
export {};
