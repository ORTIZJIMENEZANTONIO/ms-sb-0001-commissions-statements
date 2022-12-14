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
exports.CourtController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const court_service_1 = require("./court.service");
const court_dto_1 = require("./dto/court.dto");
let CourtController = class CourtController {
    constructor(courtService) {
        this.courtService = courtService;
    }
    async getAllCourts(pagination) {
        return await this.courtService.getAllCourt(pagination);
    }
    async getCourtById(id) {
        return await this.courtService.getCourtById(id);
    }
    async createCourt(courtDTO) {
        const task = await this.courtService.createCourt(courtDTO);
        return task ? task :
            { statusCode: 503, message: "This court was not created", error: "Create Error" };
    }
    async updateCourt(courtDTO) {
        const task = await this.courtService.updateCourt(courtDTO.id, courtDTO);
        return task ? task : { statusCode: '404', message: 'Court not found', error: "Not found" };
    }
    async deleteCourt(id_court) {
        const { affected } = await this.courtService.deleteCourt(id_court);
        return affected == 0
            ? { statusCode: '404', message: 'Court not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllCourt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "getAllCourts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getCourtById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "getCourtById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createCourt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [court_dto_1.CourtDTO]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "createCourt", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateCourt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [court_dto_1.CourtDTO]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "updateCourt", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteCourt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "deleteCourt", null);
CourtController = __decorate([
    (0, common_1.Controller)('court'),
    __metadata("design:paramtypes", [court_service_1.CourtService])
], CourtController);
exports.CourtController = CourtController;
//# sourceMappingURL=court.controller.js.map