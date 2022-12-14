import { StationDto } from "./station.dto";
declare const UpdateStationDto_base: import("@nestjs/common").Type<Partial<StationDto>>;
export declare class UpdateStationDto extends UpdateStationDto_base {
    stationIdToUpdate: number;
}
export {};
