import { CityDto } from './city.dto';
declare const UpdateCityDto_base: import("@nestjs/common").Type<Partial<CityDto>>;
export declare class UpdateCityDto extends UpdateCityDto_base {
    codeToUpdate: string;
}
export {};
