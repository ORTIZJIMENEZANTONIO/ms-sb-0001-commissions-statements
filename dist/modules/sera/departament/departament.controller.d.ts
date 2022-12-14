import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DepartamentService } from './departament.service';
import { DepartamentDTO } from './dto/departament.dto';
export declare class DepartamentController {
    private readonly departamentService;
    constructor(departamentService: DepartamentService);
    getAllDepartaments(pagination: PaginationDto): Promise<{
        data: import("./entity/departament.entity").DepartamentEntity[];
        count: number;
    }>;
    getDepartamentById(id: number): Promise<DepartamentDTO>;
    createDepartament(departamentDTO: DepartamentDTO): Promise<(DepartamentDTO & import("./entity/departament.entity").DepartamentEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updateDepartament(departamentDTO: DepartamentDTO): Promise<any>;
    deleteDepartament(id_departament: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
