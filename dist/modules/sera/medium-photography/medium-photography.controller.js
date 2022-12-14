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
exports.MediumPhotographyController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const medium_photography_dto_1 = require("./dto/medium-photography.dto");
const medium_photography_service_1 = require("./medium-photography.service");
let MediumPhotographyController = class MediumPhotographyController {
    constructor(mediumPhotographyService) {
        this.mediumPhotographyService = mediumPhotographyService;
    }
    async getAllMediumPhotographys(pagination) {
        return await this.mediumPhotographyService.getAllMediumPhotography(pagination);
    }
    async getMediumPhotographyById(id) {
        return await this.mediumPhotographyService.getMediumPhotographyById(id);
    }
    async createMediumPhotography(mediumPhotographyDTO) {
        const task = await this.mediumPhotographyService.createMediumPhotography(mediumPhotographyDTO);
        return task ? task :
            { statusCode: 503, message: "This mediumPhotography was not created", error: "Create Error" };
    }
    async updateMediumPhotography(mediumPhotographyDTO) {
        const task = await this.mediumPhotographyService.updateMediumPhotography(mediumPhotographyDTO.id, mediumPhotographyDTO);
        return task ? task : { statusCode: '404', message: 'MediumPhotography not found', error: "Not found" };
    }
    async deleteMediumPhotography(id_mediumPhotography) {
        const { affected } = await this.mediumPhotographyService.deleteMediumPhotography(id_mediumPhotography);
        return affected == 0
            ? { statusCode: '404', message: 'MediumPhotography not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllMediumPhotography' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], MediumPhotographyController.prototype, "getAllMediumPhotographys", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getMediumPhotographyById' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MediumPhotographyController.prototype, "getMediumPhotographyById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createMediumPhotography' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medium_photography_dto_1.MediumPhotographyDTO]),
    __metadata("design:returntype", Promise)
], MediumPhotographyController.prototype, "createMediumPhotography", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateMediumPhotography' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medium_photography_dto_1.MediumPhotographyDTO]),
    __metadata("design:returntype", Promise)
], MediumPhotographyController.prototype, "updateMediumPhotography", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteMediumPhotography' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MediumPhotographyController.prototype, "deleteMediumPhotography", null);
MediumPhotographyController = __decorate([
    (0, common_1.Controller)('medium-photography'),
    __metadata("design:paramtypes", [medium_photography_service_1.MediumPhotographyService])
], MediumPhotographyController);
exports.MediumPhotographyController = MediumPhotographyController;
//# sourceMappingURL=medium-photography.controller.js.map