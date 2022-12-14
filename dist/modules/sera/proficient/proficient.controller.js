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
exports.ProficientController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const proficient_dto_1 = require("./dto/proficient.dto");
const proficient_service_1 = require("./proficient.service");
let ProficientController = class ProficientController {
    constructor(proficientService) {
        this.proficientService = proficientService;
    }
    async getAllProficients(pagination) {
        return await this.proficientService.getAllProficient(pagination);
    }
    async getProficientById(id) {
        return await this.proficientService.getProficientById(id);
    }
    async createProficient(proficientDTO) {
        const task = await this.proficientService.createProficient(proficientDTO);
        return task ? task :
            { statusCode: 503, message: "This proficient was not created", error: "Create Error" };
    }
    async updateProficient(proficientDTO) {
        const task = await this.proficientService.updateProficient(proficientDTO.id, proficientDTO);
        return task ? task : { statusCode: '404', message: 'Proficient not found', error: "Not found" };
    }
    async deleteProficient(id_proficient) {
        const { affected } = await this.proficientService.deleteProficient(id_proficient);
        return affected == 0
            ? { statusCode: '404', message: 'Proficient not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllProficient' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "getAllProficients", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getProficientById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "getProficientById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createProficient' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proficient_dto_1.ProficientDTO]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "createProficient", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateProficient' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proficient_dto_1.ProficientDTO]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "updateProficient", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteProficient' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "deleteProficient", null);
ProficientController = __decorate([
    (0, common_1.Controller)('proficient'),
    __metadata("design:paramtypes", [proficient_service_1.ProficientService])
], ProficientController);
exports.ProficientController = ProficientController;
//# sourceMappingURL=proficient.controller.js.map