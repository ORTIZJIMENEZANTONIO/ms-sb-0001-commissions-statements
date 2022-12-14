import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PersonDTO } from './dto/person.dto';
import { PersonService } from './person.service';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    getAllPersons(pagination: PaginationDto): Promise<{
        data: import("./entity/person.entity").PersonEntity[];
        count: number;
    }>;
    getPersonById(id: number): Promise<PersonDTO>;
    createPerson(personDTO: PersonDTO): Promise<(PersonDTO & import("./entity/person.entity").PersonEntity) | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    updatePerson(personDTO: PersonDTO): Promise<any>;
    deletePerson(id_person: number): Promise<{
        statusCode: string;
        message: string;
        error: string;
    } | {
        statusCode: string;
        message: string;
        error?: undefined;
    }>;
}
