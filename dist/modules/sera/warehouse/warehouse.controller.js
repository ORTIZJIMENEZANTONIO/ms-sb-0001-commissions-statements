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
exports.WarehouseController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const warehouse_service_1 = require("./warehouse.service");
const warehouse_dto_1 = require("./dto/warehouse.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let WarehouseController = class WarehouseController {
    constructor(warehouseService, logger) {
        this.warehouseService = warehouseService;
        this.logger = logger;
    }
    async createWarehouse(warehouseDto) {
        const warehouseCreated = await this.warehouseService.createWarehouse(warehouseDto);
        return warehouseCreated
            ? warehouseCreated
            : { statusCode: 503, message: "This Warehouse was not created", error: "Create Error" };
    }
    async getAllWarehouses({ inicio, pageSize }) {
        return await this.warehouseService.getAllWarehouses({ inicio, pageSize });
    }
    async getWarehouseById(id) {
        const warehouseFound = await this.warehouseService.getWarehouseById(id);
        return warehouseFound
            ? warehouseFound
            : { statusCode: '404', message: 'Warehouse not found', error: "Not found" };
    }
    async updateWarehouse(data) {
        const warehouseUpdated = await this.warehouseService.updateWarehouse(data.idToUpdate, data);
        return warehouseUpdated
            ? warehouseUpdated
            : { statusCode: '404', message: 'Warehouse not found', error: "Not found" };
    }
    async deleteWarehouse(id) {
        const { affected } = await this.warehouseService.deleteWarehouse(id);
        return affected == 0
            ? { statusCode: '404', message: 'Warehouse not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createWarehouse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [warehouse_dto_1.WarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createWarehouse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllWarehouses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getAllWarehouses", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getWarehouseById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWarehouseById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateWarehouse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "updateWarehouse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteWarehouse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "deleteWarehouse", null);
WarehouseController = __decorate([
    (0, common_1.Controller)('warehouse'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [warehouse_service_1.WarehouseService,
        winston_1.Logger])
], WarehouseController);
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse.controller.js.map