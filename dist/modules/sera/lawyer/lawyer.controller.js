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
exports.LawyerController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const lawyer_service_1 = require("./lawyer.service");
const lawyer_dto_1 = require("./dto/lawyer.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let LawyerController = class LawyerController {
    constructor(lawyerService, logger) {
        this.lawyerService = lawyerService;
        this.logger = logger;
    }
    async createLawyer(lawyerDto) {
        const LawyerCreated = await this.lawyerService.createLawyer(lawyerDto);
        return LawyerCreated
            ? LawyerCreated
            : { statusCode: 503, message: "This general Lawyer was not created", error: "Create Error" };
    }
    async getAllLawyers({ inicio, pageSize }) {
        return await this.lawyerService.getAllLawyers({ inicio, pageSize });
    }
    async getLawyerById(id) {
        const LawyerFound = await this.lawyerService.getLawyerById(id);
        return LawyerFound
            ? LawyerFound
            : { statusCode: '404', message: 'Lawyer not found', error: "Not found" };
    }
    async updateLawyer(data) {
        const lawyerUpdated = await this.lawyerService.updateLawyer(data.idToUpdate, data);
        return lawyerUpdated
            ? lawyerUpdated
            : { statusCode: '404', message: 'Lawyer not found', error: "Not found" };
    }
    async deleteLawyer(id) {
        const { affected } = await this.lawyerService.deleteLawyer(id);
        return affected == 0
            ? { statusCode: '404', message: 'Lawyer not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createLawyer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lawyer_dto_1.LawyerDto]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "createLawyer", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllLawyers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "getAllLawyers", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getLawyerById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "getLawyerById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateLawyer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "updateLawyer", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteLawyer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "deleteLawyer", null);
LawyerController = __decorate([
    (0, common_1.Controller)('lawyer'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [lawyer_service_1.LawyerService,
        winston_1.Logger])
], LawyerController);
exports.LawyerController = LawyerController;
//# sourceMappingURL=lawyer.controller.js.map