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
exports.StorehouseController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const storehouse_service_1 = require("./storehouse.service");
const storehouse_dto_1 = require("./dto/storehouse.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let StorehouseController = class StorehouseController {
    constructor(storehouseService, logger) {
        this.storehouseService = storehouseService;
        this.logger = logger;
    }
    async createstorehouse(storehouseDto) {
        const storehouseCreated = await this.storehouseService.createStorehouse(storehouseDto);
        return storehouseCreated
            ? storehouseCreated
            : { statusCode: 503, message: "This storehouse was not created", error: "Create Error" };
    }
    async getAllstorehouses({ inicio, pageSize }) {
        return await this.storehouseService.getAllStorehouses({ inicio, pageSize });
    }
    async getstorehouseById(id) {
        const storehouseFound = await this.storehouseService.getStorehouseById(id);
        return storehouseFound
            ? storehouseFound
            : { statusCode: '404', message: 'Storehouse not found', error: "Not found" };
    }
    async updatestorehouse(data) {
        const storehouseUpdated = await this.storehouseService.updateStorehouse(data.idToUpdate, data);
        return storehouseUpdated
            ? storehouseUpdated
            : { statusCode: '404', message: 'Storehouse not found', error: "Not found" };
    }
    async deletestorehouse(id) {
        const { affected } = await this.storehouseService.deleteStorehouse(id);
        return affected == 0
            ? { statusCode: '404', message: 'Storehouse not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createStorehouse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [storehouse_dto_1.StorehouseDto]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "createstorehouse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllStorehouses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "getAllstorehouses", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getstorehouseById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "getstorehouseById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateStorehouse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "updatestorehouse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteStorehouse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorehouseController.prototype, "deletestorehouse", null);
StorehouseController = __decorate([
    (0, common_1.Controller)('storehouse'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [storehouse_service_1.StorehouseService,
        winston_1.Logger])
], StorehouseController);
exports.StorehouseController = StorehouseController;
//# sourceMappingURL=storehouse.controller.js.map