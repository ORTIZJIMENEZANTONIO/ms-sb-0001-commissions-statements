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
exports.SubdelegationController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const subdelegation_dto_1 = require("./dto/subdelegation.dto");
const subdelegation_service_1 = require("./subdelegation.service");
let SubdelegationController = class SubdelegationController {
    constructor(subdelegationService) {
        this.subdelegationService = subdelegationService;
    }
    async getAllSubdelegations(pagination) {
        return await this.subdelegationService.getAllSubdelegation(pagination);
    }
    async getSubdelegationById(id) {
        return await this.subdelegationService.getSubdelegationById(id);
    }
    async createSubdelegation(subdelegationDTO) {
        const task = await this.subdelegationService.createSubdelegation(subdelegationDTO);
        return task ? task :
            { statusCode: 503, message: "This general subdelegation was not created", error: "Create Error" };
    }
    async updateSubdelegation(subdelegationDTO) {
        const task = await this.subdelegationService.updateSubdelegation(subdelegationDTO.id, subdelegationDTO);
        return task ? task : { statusCode: '404', message: 'Subdelegation not found', error: "Not found" };
    }
    async deleteSubdelegation(id_subdelegation) {
        const { affected } = await this.subdelegationService.deleteSubdelegation(id_subdelegation);
        return affected == 0
            ? { statusCode: '404', message: 'Subdelegation not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllSubdelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "getAllSubdelegations", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getSubdelegationById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "getSubdelegationById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createSubdelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subdelegation_dto_1.SubdelegationDTO]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "createSubdelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateSubdelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subdelegation_dto_1.SubdelegationDTO]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "updateSubdelegation", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteSubdelegation' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubdelegationController.prototype, "deleteSubdelegation", null);
SubdelegationController = __decorate([
    (0, common_1.Controller)('subdelegation'),
    __metadata("design:paramtypes", [subdelegation_service_1.SubdelegationService])
], SubdelegationController);
exports.SubdelegationController = SubdelegationController;
//# sourceMappingURL=subdelegation.controller.js.map