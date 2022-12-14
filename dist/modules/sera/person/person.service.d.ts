import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Repository } from 'typeorm';
import { PersonDTO } from './dto/person.dto';
import { PersonEntity } from './entity/person.entity';
export declare class PersonService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<PersonEntity>, logger: Logger, counter: Counter<string>);
    getAllPerson({ inicio, pageSize }: PaginationDto): Promise<{
        data: PersonEntity[];
        count: number;
    }>;
    getPersonById(id: number): Promise<PersonDTO>;
    createPerson(personDTO: PersonDTO): Promise<PersonDTO & PersonEntity>;
    updatePerson(id: number, personDTO: PersonDTO): Promise<PersonDTO | any>;
    deletePerson(id: number): Promise<import("typeorm").DeleteResult>;
}
