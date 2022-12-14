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
exports.LockerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const locker_dto_1 = require("./dto/locker.dto");
const locker_service_1 = require("./locker.service");
let LockerController = class LockerController {
    constructor(lockerService, logger) {
        this.lockerService = lockerService;
        this.logger = logger;
    }
    async getAllLockers(pagination) {
        return await this.lockerService.getAllLocker(pagination);
    }
    async getLockerById(id) {
        return await this.lockerService.getLockerById(id);
    }
    async createLocker(lockerDTO) {
        const task = await this.lockerService.createLocker(lockerDTO);
        return task ? task :
            { statusCode: 503, message: "This locker was not created", error: "Create Error" };
    }
    async updateLocker(lockerDTO) {
        const task = await this.lockerService.updateLocker(lockerDTO.id, lockerDTO);
        return task ? task : { statusCode: '404', message: 'Locker not found', error: "Not found" };
    }
    async deleteLocker(id) {
        const { affected } = await this.lockerService.deleteLocker(id);
        return affected == 0
            ? { statusCode: '404', message: 'Locker not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllLocker' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "getAllLockers", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getLockerById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "getLockerById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createLocker' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locker_dto_1.LockerDTO]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "createLocker", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateLocker' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locker_dto_1.LockerDTO]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "updateLocker", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteLocker' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "deleteLocker", null);
LockerController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('locker'),
    (0, swagger_1.ApiTags)('locker'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [locker_service_1.LockerService,
        common_1.Logger])
], LockerController);
exports.LockerController = LockerController;
//# sourceMappingURL=locker.controller.js.map