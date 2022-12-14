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
exports.DepartamentController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const departament_service_1 = require("./departament.service");
const departament_dto_1 = require("./dto/departament.dto");
let DepartamentController = class DepartamentController {
    constructor(departamentService) {
        this.departamentService = departamentService;
    }
    async getAllDepartaments(pagination) {
        return await this.departamentService.getAllDepartament(pagination);
    }
    async getDepartamentById(id) {
        return await this.departamentService.getDepartamentById(id);
    }
    async createDepartament(departamentDTO) {
        const task = await this.departamentService.createDepartament(departamentDTO);
        return task ? task :
            { statusCode: 503, message: "This departament was not created", error: "Create Error" };
    }
    async updateDepartament(departamentDTO) {
        const task = await this.departamentService.updateDepartament(departamentDTO.id, departamentDTO);
        return task ? task : { statusCode: '404', message: 'Departament not found', error: "Not found" };
    }
    async deleteDepartament(id_departament) {
        const { affected } = await this.departamentService.deleteDepartament(id_departament);
        return affected == 0
            ? { statusCode: '404', message: 'Departament not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllDepartament' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DepartamentController.prototype, "getAllDepartaments", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getDepartamentById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentController.prototype, "getDepartamentById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createDepartament' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [departament_dto_1.DepartamentDTO]),
    __metadata("design:returntype", Promise)
], DepartamentController.prototype, "createDepartament", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateDepartament' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [departament_dto_1.DepartamentDTO]),
    __metadata("design:returntype", Promise)
], DepartamentController.prototype, "updateDepartament", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteDepartament' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentController.prototype, "deleteDepartament", null);
DepartamentController = __decorate([
    (0, common_1.Controller)('departament'),
    __metadata("design:paramtypes", [departament_service_1.DepartamentService])
], DepartamentController);
exports.DepartamentController = DepartamentController;
//# sourceMappingURL=departament.controller.js.map