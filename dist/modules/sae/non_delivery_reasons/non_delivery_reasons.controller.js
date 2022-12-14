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
exports.NonDeliveryReasonsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const non_delivery_reasons_service_1 = require("./non_delivery_reasons.service");
const nondeliveryreasons_dto_1 = require("./dto/nondeliveryreasons.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let NonDeliveryReasonsController = class NonDeliveryReasonsController {
    constructor(nonDeliveryReasonsService, logger) {
        this.nonDeliveryReasonsService = nonDeliveryReasonsService;
        this.logger = logger;
    }
    async getAllLocalitys(paginationDto) {
        return await this.nonDeliveryReasonsService.getAllNonDeliveryReasons(paginationDto);
    }
    async createNonDeliveryReason(nonDeliveryReasonsDto) {
        const response = await this.nonDeliveryReasonsService.createNonDeliveryReason(nonDeliveryReasonsDto);
        if (!response) {
            return { statusCode: 500, message: "This non delivery reason doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findNonDeliveryReason(id) {
        const response = await this.nonDeliveryReasonsService.findNonDeliveryReason(id);
        if (!response) {
            return { statusCode: 404, message: "This non delivery reason doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateNonDeliveryReason(nonDeliveryReasonsDto) {
        const response = await this.nonDeliveryReasonsService.updateNonDeliveryReason(nonDeliveryReasonsDto);
        if (!response) {
            return { statusCode: 400, message: "This non delivery reason doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteNonDeliveryReason(id) {
        const remove = await this.nonDeliveryReasonsService.deleteNonDeliveryReason(id);
        if (!remove) {
            return { statusCode: 400, message: "This non delivery reason doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllNonDeliveryReasons' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], NonDeliveryReasonsController.prototype, "getAllLocalitys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createNonDeliveryReason' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nondeliveryreasons_dto_1.NonDeliveryReasonsDto]),
    __metadata("design:returntype", Promise)
], NonDeliveryReasonsController.prototype, "createNonDeliveryReason", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findNonDeliveryReason' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NonDeliveryReasonsController.prototype, "findNonDeliveryReason", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateNonDeliveryReason' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nondeliveryreasons_dto_1.NonDeliveryReasonsDto]),
    __metadata("design:returntype", Promise)
], NonDeliveryReasonsController.prototype, "updateNonDeliveryReason", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteNonDeliveryReason' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NonDeliveryReasonsController.prototype, "deleteNonDeliveryReason", null);
NonDeliveryReasonsController = __decorate([
    (0, common_1.Controller)('non-delivery-reasons'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [non_delivery_reasons_service_1.NonDeliveryReasonsService, winston_1.Logger])
], NonDeliveryReasonsController);
exports.NonDeliveryReasonsController = NonDeliveryReasonsController;
//# sourceMappingURL=non_delivery_reasons.controller.js.map