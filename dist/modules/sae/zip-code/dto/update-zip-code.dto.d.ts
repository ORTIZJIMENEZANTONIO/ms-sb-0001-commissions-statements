import { CreateZipCodeDto } from './create-zip-code.dto';
declare const UpdateZipCodeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateZipCodeDto>>;
export declare class UpdateZipCodeDto extends UpdateZipCodeDto_base {
    codeToUpdate: string;
}
export {};
