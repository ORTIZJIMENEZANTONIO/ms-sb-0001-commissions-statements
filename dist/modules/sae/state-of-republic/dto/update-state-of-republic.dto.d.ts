import { StateOfRepublicDto } from "./state-of-republic.dto";
declare const UpdateStateOfRepublicDto_base: import("@nestjs/common").Type<Partial<StateOfRepublicDto>>;
export declare class UpdateStateOfRepublicDto extends UpdateStateOfRepublicDto_base {
    stateCodeToUpdate: string;
}
export {};
