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
exports.DeductiveController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const deductive_service_1 = require("./deductive.service");
const deductive_dto_1 = require("./dto/deductive.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let DeductiveController = class DeductiveController {
    constructor(deductiveService, logger) {
        this.deductiveService = deductiveService;
        this.logger = logger;
    }
    async createDeductive(deductiveDto) {
        const userCreated = await this.deductiveService.createDeductive(deductiveDto);
        return userCreated
            ? userCreated
            : { statusCode: 503, message: "This decuvtive was not created", error: "Create Error" };
    }
    async getAllDeductives({ inicio, pageSize }) {
        return await this.deductiveService.getAllDeductives({ inicio, pageSize });
    }
    async getDeductiveById(id) {
        const deductiveFound = await this.deductiveService.getDeductiveById(id);
        return deductiveFound
            ? deductiveFound
            : { statusCode: '404', message: 'Deductive not found', error: "Not found" };
    }
    async updateDeductive(deductiveData) {
        return await this.deductiveService.updateDeductive(deductiveData.idToUpdate, deductiveData);
    }
    async deleteDeductive(id) {
        const affected = await this.deductiveService.deleteDeductive(id);
        return !affected
            ? { statusCode: '404', message: 'Deductive not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createDeductive' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deductive_dto_1.DeductiveDto]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "createDeductive", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllDeductives' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "getAllDeductives", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getDeductiveById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "getDeductiveById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateDeductive' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "updateDeductive", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteDeductive' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "deleteDeductive", null);
DeductiveController = __decorate([
    (0, common_1.Controller)('deductive'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [deductive_service_1.DeductiveService,
        winston_1.Logger])
], DeductiveController);
exports.DeductiveController = DeductiveController;
//# sourceMappingURL=deductive.controller.js.map