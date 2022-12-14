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
exports.RackController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const rack_dto_1 = require("./dto/rack.dto");
const rack_service_1 = require("./rack.service");
let RackController = class RackController {
    constructor(rackService, logger) {
        this.rackService = rackService;
        this.logger = logger;
    }
    async createRack(rackDto) {
        const rackCreated = await this.rackService.createRack(rackDto);
        return rackCreated
            ? rackCreated
            : { statusCode: 503, message: "This Rack was not created", error: "Create Error" };
    }
    async getAllRacks(pagination) {
        return await this.rackService.getAllRacks(pagination);
    }
    async getRackById(id) {
        const rackFound = await this.rackService.getRackById(id);
        return rackFound
            ? rackFound
            : { statusCode: '404', message: 'Rack not found', error: "Not found" };
    }
    async updateRack(data) {
        const rackUpdated = await this.rackService.updateRack(data.idToUpdate, data);
        return rackUpdated
            ? rackUpdated
            : { statusCode: '404', message: 'Rack not found', error: "Not found" };
    }
    async deleteRack(id) {
        const affected = await this.rackService.deleteRack(id);
        return !affected
            ? { statusCode: '404', message: 'Rack not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createRack' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rack_dto_1.RackDto]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "createRack", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllRacks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "getAllRacks", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getRackById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "getRackById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateRack' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "updateRack", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteRack' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "deleteRack", null);
RackController = __decorate([
    (0, common_1.Controller)('rack'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [rack_service_1.RackService,
        winston_1.Logger])
], RackController);
exports.RackController = RackController;
//# sourceMappingURL=rack.controller.js.map