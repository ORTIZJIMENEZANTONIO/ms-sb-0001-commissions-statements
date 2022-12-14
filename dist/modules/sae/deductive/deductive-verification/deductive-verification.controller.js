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
exports.DeductiveVerificationController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const deductive_verification_service_1 = require("./deductive-verification.service");
const create_deductive_verification_dto_1 = require("./dto/create-deductive-verification.dto");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
let DeductiveVerificationController = class DeductiveVerificationController {
    constructor(deductiveVerificationService, logger) {
        this.deductiveVerificationService = deductiveVerificationService;
        this.logger = logger;
    }
    async createDeductiveVerificationFound(deductiveVerificationDto) {
        const deductiveVerificationCreated = await this.deductiveVerificationService.createDeductiveVerification(deductiveVerificationDto);
        return deductiveVerificationCreated
            ? deductiveVerificationCreated
            : { statusCode: 503, message: "This deductive verification was not created", error: "Create Error" };
    }
    async getAllDeductiveVerificationFounds({ inicio, pageSize }) {
        return await this.deductiveVerificationService.getAllDeductivesVerifications({ inicio, pageSize });
    }
    async getDeductiveVerificationById(id) {
        const deductiveVerification = await this.deductiveVerificationService.getDeductiveVerificationById(id);
        return deductiveVerification
            ? deductiveVerification
            : { statusCode: '404', message: 'Deductive verification not found', error: "Not found" };
    }
    async updateDeductiveVerification(deductiveData) {
        const deductiveVerificationUpdated = await this.deductiveVerificationService.updateDeductiveVerification(deductiveData.idToUpdate, deductiveData);
        return deductiveVerificationUpdated
            ? deductiveVerificationUpdated
            : { statusCode: '404', message: 'Deductive verification not found', error: "Not found" };
    }
    async deleteDeductiveVerification(id) {
        const { affected } = await this.deductiveVerificationService.deleteDeductiveVerification(id);
        return affected == 0
            ? { statusCode: '404', message: 'Deductive Verification not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createDeductiveVerification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deductive_verification_dto_1.CreateDeductiveVerificationDto]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "createDeductiveVerificationFound", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllDeductivesVerifications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "getAllDeductiveVerificationFounds", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getDeductiveVerificationById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "getDeductiveVerificationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateDeductiveVerification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "updateDeductiveVerification", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteDeductiveVerification' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "deleteDeductiveVerification", null);
DeductiveVerificationController = __decorate([
    (0, common_1.Controller)('deductive-verification'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [deductive_verification_service_1.DeductiveVerificationService,
        winston_1.Logger])
], DeductiveVerificationController);
exports.DeductiveVerificationController = DeductiveVerificationController;
//# sourceMappingURL=deductive-verification.controller.js.map