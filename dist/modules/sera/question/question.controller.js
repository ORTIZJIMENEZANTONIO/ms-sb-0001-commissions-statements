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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const question_service_1 = require("./question.service");
const question_dto_1 = require("./dto/question.dto");
let QuestionController = class QuestionController {
    constructor(questionService, logger) {
        this.questionService = questionService;
        this.logger = logger;
    }
    async createQuestion(questionDto) {
        const questionCreated = await this.questionService.createQuestion(questionDto);
        return questionCreated
            ? questionCreated
            : { statusCode: 503, message: "This Question was not created", error: "Create Error" };
    }
    async getAllQuestions(pagination) {
        return await this.questionService.getAllQuestions(pagination);
    }
    async getQuestionById(id) {
        const QuestionFound = await this.questionService.getQuestionById(id);
        return QuestionFound
            ? QuestionFound
            : { statusCode: '404', message: 'Question not found', error: "Not found" };
    }
    async updateQuestion(data) {
        const QuestionUpdated = await this.questionService.updateQuestion(data.idToUpdate, data);
        return QuestionUpdated
            ? QuestionUpdated
            : { statusCode: '404', message: 'Question not found', error: "Not found" };
    }
    async deleteQuestion(id) {
        const { affected } = await this.questionService.deleteQuestion(id);
        return affected == 0
            ? { statusCode: '404', message: 'Question not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createQuestion' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllQuestions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAllQuestions", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getQuestionById' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestionById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateQuestion' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "updateQuestion", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteQuestion' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteQuestion", null);
QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [question_service_1.QuestionService,
        winston_1.Logger])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map