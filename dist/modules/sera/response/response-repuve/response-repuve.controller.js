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
exports.ResponseRepuveController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const response_repuve_service_1 = require("./response-repuve.service");
const response_repuve_dto_1 = require("./dto/response-repuve.dto");
let ResponseRepuveController = class ResponseRepuveController {
    constructor(responseRepuveService, logger) {
        this.responseRepuveService = responseRepuveService;
        this.logger = logger;
    }
    async createResponseRepuve(responseRepuveDto) {
        const responseRepuveCreated = await this.responseRepuveService.createResponseRepuve(responseRepuveDto);
        return responseRepuveCreated
            ? responseRepuveCreated
            : { statusCode: 503, message: "This ResponseRepuve was not created", error: "Create Error" };
    }
    async getAllResponsesRepuve(pagination) {
        return await this.responseRepuveService.getAllResponsesRepuve(pagination);
    }
    async getResponseRepuveById(id) {
        const responseRepuveFound = await this.responseRepuveService.getResponseRepuveById(id);
        return responseRepuveFound
            ? responseRepuveFound
            : { statusCode: '404', message: 'ResponseRepuve not found', error: "Not found" };
    }
    async updateResponseRepuve(data) {
        const responseRepuveUpdated = await this.responseRepuveService.updateResponseRepuve(data.idToUpdate, data);
        return responseRepuveUpdated
            ? responseRepuveUpdated
            : { statusCode: '404', message: 'ResponseRepuve not found', error: "Not found" };
    }
    async deleteResponseRepuve(id) {
        const { affected } = await this.responseRepuveService.deleteResponseRepuve(id);
        return affected == 0
            ? { statusCode: '404', message: 'ResponseRepuve not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createResponseRepuve' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_repuve_dto_1.ResponseRepuveDto]),
    __metadata("design:returntype", Promise)
], ResponseRepuveController.prototype, "createResponseRepuve", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllResponsesRepuve' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ResponseRepuveController.prototype, "getAllResponsesRepuve", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getResponseRepuveById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponseRepuveController.prototype, "getResponseRepuveById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateResponseRepuve' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResponseRepuveController.prototype, "updateResponseRepuve", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteResponseRepuve' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponseRepuveController.prototype, "deleteResponseRepuve", null);
ResponseRepuveController = __decorate([
    (0, common_1.Controller)('response-repuve'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [response_repuve_service_1.ResponseRepuveService,
        winston_1.Logger])
], ResponseRepuveController);
exports.ResponseRepuveController = ResponseRepuveController;
//# sourceMappingURL=response-repuve.controller.js.map