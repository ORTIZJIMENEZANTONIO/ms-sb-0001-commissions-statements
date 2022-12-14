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
exports.ResponseController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const response_service_1 = require("./response.service");
const response_dto_1 = require("./dto/response.dto");
let ResponseController = class ResponseController {
    constructor(responseService, logger) {
        this.responseService = responseService;
        this.logger = logger;
    }
    async createResponse(responseDto) {
        const responseCreated = await this.responseService.createResponse(responseDto);
        return responseCreated
            ? responseCreated
            : { statusCode: 503, message: "This Response was not created", error: "Create Error" };
    }
    async getAllResponses(pagination) {
        return await this.responseService.getAllResponses(pagination);
    }
    async getResponseById(id) {
        const responseFound = await this.responseService.getResponseById(id);
        return responseFound
            ? responseFound
            : { statusCode: '404', message: 'Response not found', error: "Not found" };
    }
    async updateResponse(data) {
        const responseUpdated = await this.responseService.updateResponse(data.idToUpdate, data);
        return responseUpdated
            ? responseUpdated
            : { statusCode: '404', message: 'Response not found', error: "Not found" };
    }
    async deleteResponse(id) {
        const { affected } = await this.responseService.deleteResponse(id);
        return affected == 0
            ? { statusCode: '404', message: 'Response not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createResponse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_dto_1.ResponseDto]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "createResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllResponses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "getAllResponses", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getResponseById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "getResponseById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateResponse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "updateResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteResponse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "deleteResponse", null);
ResponseController = __decorate([
    (0, common_1.Controller)('response'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [response_service_1.ResponseService,
        winston_1.Logger])
], ResponseController);
exports.ResponseController = ResponseController;
//# sourceMappingURL=response.controller.js.map