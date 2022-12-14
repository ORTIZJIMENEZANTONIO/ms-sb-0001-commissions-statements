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
exports.ScoreController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const score_dto_1 = require("./dto/score.dto");
const score_service_1 = require("./score.service");
let ScoreController = class ScoreController {
    constructor(scoreService, logger) {
        this.scoreService = scoreService;
        this.logger = logger;
    }
    async createScore(scoreDto) {
        const ScoreCreated = await this.scoreService.createScore(scoreDto);
        return ScoreCreated
            ? ScoreCreated
            : { statusCode: 503, message: "This Score was not created", error: "Create Error" };
    }
    async getAllScores(pagination) {
        return await this.scoreService.getAllScores(pagination);
    }
    async getScoreByCode(code) {
        const scoreFound = await this.scoreService.getScoreByCode(code);
        return scoreFound
            ? scoreFound
            : { statusCode: '404', message: 'Score not found', error: "Not found" };
    }
    async updateScore(data) {
        const scoreUpdated = await this.scoreService.updateScore(data.codeToUpdate, data);
        return scoreUpdated
            ? scoreUpdated
            : { statusCode: '404', message: 'Score not found', error: "Not found" };
    }
    async deleteScore(code) {
        const { affected } = await this.scoreService.deleteScore(code);
        return affected == 0
            ? { statusCode: '404', message: 'Score not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createScore' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [score_dto_1.ScoreDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "createScore", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllScores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "getAllScores", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getScoreByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "getScoreByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateScore' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "updateScore", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteScore' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "deleteScore", null);
ScoreController = __decorate([
    (0, common_1.Controller)('score'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [score_service_1.ScoreService,
        winston_1.Logger])
], ScoreController);
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map