"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const person_dto_1 = require("./dto/person.dto");
const person_service_1 = require("./person.service");
let PersonController = class PersonController {
    constructor(personService) {
        this.personService = personService;
    }
    async getAllPersons(pagination) {
        return await this.personService.getAllPerson(pagination);
    }
    async getPersonById(id) {
        return await this.personService.getPersonById(id);
    }
    async createPerson(personDTO) {
        const task = await this.personService.createPerson(personDTO);
        return task ? task :
            { statusCode: 503, message: "This person was not created", error: "Create Error" };
    }
    async updatePerson(personDTO) {
        const task = await this.personService.updatePerson(personDTO.id, personDTO);
        return task ? task : { statusCode: '404', message: 'Person not found', error: "Not found" };
    }
    async deletePerson(id_person) {
        const { affected } = await this.personService.deletePerson(id_person);
        return affected == 0
            ? { statusCode: '404', message: 'Person not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllPerson' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "getAllPersons", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getPersonById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "getPersonById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createPerson' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_dto_1.PersonDTO]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "createPerson", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updatePerson' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_dto_1.PersonDTO]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "updatePerson", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deletePerson' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "deletePerson", null);
PersonController = __decorate([
    (0, common_1.Controller)('person'),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map