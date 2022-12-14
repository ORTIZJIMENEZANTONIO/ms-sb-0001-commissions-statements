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
exports.ServiceCatController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const service_cat_dto_1 = require("./dto/service-cat.dto");
const service_cat_service_1 = require("./service-cat.service");
let ServiceCatController = class ServiceCatController {
    constructor(serviceCatService, logger) {
        this.serviceCatService = serviceCatService;
        this.logger = logger;
    }
    async createServiceCat(serviceCatDto) {
        const serviceCatCreated = await this.serviceCatService.createService(serviceCatDto);
        return serviceCatCreated
            ? serviceCatCreated
            : { statusCode: 503, message: "This ServiceCat was not created", error: "Create Error" };
    }
    async getAllServiceCats(pagination) {
        return await this.serviceCatService.getAllServices(pagination);
    }
    async getServiceByCode(code) {
        const serviceCatFound = await this.serviceCatService.getServiceByCode(code);
        return serviceCatFound
            ? serviceCatFound
            : { statusCode: '404', message: 'ServiceCat not found', error: "Not found" };
    }
    async updateServiceCat(data) {
        const serviceCatUpdated = await this.serviceCatService.updateService(data.codeToUpdate, data);
        return serviceCatUpdated
            ? serviceCatUpdated
            : { statusCode: '404', message: 'ServiceCat not found', error: "Not found" };
    }
    async deleteServiceCat(code) {
        const { affected } = await this.serviceCatService.deleteService(code);
        return affected == 0
            ? { statusCode: '404', message: 'ServiceCat not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createServiceCat' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_cat_dto_1.ServiceCatDto]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "createServiceCat", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllServiceCats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "getAllServiceCats", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getServiceByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "getServiceByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateServiceCat' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "updateServiceCat", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteServiceCat' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "deleteServiceCat", null);
ServiceCatController = __decorate([
    (0, common_1.Controller)('service-cat'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [service_cat_service_1.ServiceCatService,
        winston_1.Logger])
], ServiceCatController);
exports.ServiceCatController = ServiceCatController;
//# sourceMappingURL=service-cat.controller.js.map