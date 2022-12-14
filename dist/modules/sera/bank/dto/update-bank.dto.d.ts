import { BankDto } from "./bank.dto";
declare const UpdatebankDto_base: import("@nestjs/common").Type<Partial<BankDto>>;
export declare class UpdatebankDto extends UpdatebankDto_base {
    codeToUpdate: string;
}
export {};
