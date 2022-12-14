import { HolidayDto } from "./holiday.dto";
declare const UpdateHolidayDto_base: import("@nestjs/common").Type<Partial<HolidayDto>>;
export declare class UpdateHolidayDto extends UpdateHolidayDto_base {
    idToUpdate: number;
}
export {};
