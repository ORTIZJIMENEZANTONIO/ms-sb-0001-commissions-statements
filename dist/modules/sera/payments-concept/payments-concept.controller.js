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
exports.PaymentsConceptController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const payment_concept_dto_1 = require("./dto/payment-concept.dto");
const payments_concept_service_1 = require("./payments-concept.service");
let PaymentsConceptController = class PaymentsConceptController {
    constructor(paymentsConceptService) {
        this.paymentsConceptService = paymentsConceptService;
    }
    async getAllPaymentsConcepts(pagination) {
        return await this.paymentsConceptService.getAllPaymentsConcept(pagination);
    }
    async getPaymentsConceptById(id) {
        return await this.paymentsConceptService.getPaymentsConceptById(id);
    }
    async createPaymentsConcept(paymentsConceptDTO) {
        const task = await this.paymentsConceptService.createPaymentsConcept(paymentsConceptDTO);
        return task ? task :
            { statusCode: 503, message: "This paymentsConcept was not created", error: "Create Error" };
    }
    async updatePaymentsConcept(paymentsConceptDTO) {
        const task = await this.paymentsConceptService.updatePaymentsConcept(paymentsConceptDTO.id, paymentsConceptDTO);
        return task ? task : { statusCode: '404', message: 'Payment concept not found', error: "Not found" };
    }
    async deletePaymentsConcept(id_paymentsConcept) {
        const { affected } = await this.paymentsConceptService.deletePaymentsConcept(id_paymentsConcept);
        return affected == 0
            ? { statusCode: '404', message: 'PaymentsConcept not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllPaymentsConcept' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "getAllPaymentsConcepts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getPaymentsConceptById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "getPaymentsConceptById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createPaymentsConcept' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_concept_dto_1.PaymentsConceptDTO]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "createPaymentsConcept", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updatePaymentsConcept' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_concept_dto_1.PaymentsConceptDTO]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "updatePaymentsConcept", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deletePaymentsConcept' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "deletePaymentsConcept", null);
PaymentsConceptController = __decorate([
    (0, common_1.Controller)('payments-concept'),
    __metadata("design:paramtypes", [payments_concept_service_1.PaymentsConceptService])
], PaymentsConceptController);
exports.PaymentsConceptController = PaymentsConceptController;
//# sourceMappingURL=payments-concept.controller.js.map