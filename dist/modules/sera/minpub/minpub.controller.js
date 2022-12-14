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
exports.MinpubController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const minpub_dto_1 = require("./dto/minpub.dto");
const minpub_service_1 = require("./minpub.service");
let MinpubController = class MinpubController {
    constructor(minpubService) {
        this.minpubService = minpubService;
    }
    async getAllMinpubs(pagination) {
        return await this.minpubService.getAllMinpub(pagination);
    }
    async getMinpubById(id) {
        return await this.minpubService.getMinpubById(id);
    }
    async createMinpub(minpubDTO) {
        const task = await this.minpubService.createMinpub(minpubDTO);
        return task ? task :
            { statusCode: 503, message: "This minpub was not created", error: "Create Error" };
    }
    async updateMinpub(minpubDTO) {
        const task = await this.minpubService.updateMinpub(minpubDTO.id, minpubDTO);
        return task ? task : { statusCode: '404', message: 'Minpub not found', error: "Not found" };
    }
    async deleteMinpub(id_minpub) {
        const { affected } = await this.minpubService.deleteMinpub(id_minpub);
        return affected == 0
            ? { statusCode: '404', message: 'Minpub not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllMinpub' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], MinpubController.prototype, "getAllMinpubs", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getMinpubById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MinpubController.prototype, "getMinpubById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createMinpub' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [minpub_dto_1.MinpubDTO]),
    __metadata("design:returntype", Promise)
], MinpubController.prototype, "createMinpub", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateMinpub' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [minpub_dto_1.MinpubDTO]),
    __metadata("design:returntype", Promise)
], MinpubController.prototype, "updateMinpub", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteMinpub' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MinpubController.prototype, "deleteMinpub", null);
MinpubController = __decorate([
    (0, common_1.Controller)('minpub'),
    __metadata("design:paramtypes", [minpub_service_1.MinpubService])
], MinpubController);
exports.MinpubController = MinpubController;
//# sourceMappingURL=minpub.controller.js.map