import { DelegationStateDto } from './create-delegation-state.dto';
declare const UpdateDelegationStateDto_base: import("@nestjs/mapped-types").MappedType<Partial<DelegationStateDto>>;
export declare class UpdateDelegationStateDto extends UpdateDelegationStateDto_base {
    idToUpdate: number;
}
export {};
