import { BatteryDto } from "./battery.dto";
declare const UpdateBatteryDto_base: import("@nestjs/common").Type<Partial<BatteryDto>>;
export declare class UpdateBatteryDto extends UpdateBatteryDto_base {
    idToUpdate: number;
}
export {};
