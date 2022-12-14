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
exports.CatParagraphsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const cat_paragraphs_service_1 = require("./cat_paragraphs.service");
const catparagraphs_dto_1 = require("./dto/catparagraphs.dto");
const pagination_1 = require("../../../shared/dto/pagination");
let CatParagraphsController = class CatParagraphsController {
    constructor(catParagraphsService, logger) {
        this.catParagraphsService = catParagraphsService;
        this.logger = logger;
    }
    async getAllCatParagraphs(pagination) {
        return await this.catParagraphsService.getAllCatParagraphs(pagination);
    }
    async createCatParagraphs(catParagraphsDto) {
        const response = await this.catParagraphsService.createCatParagraphs(catParagraphsDto);
        if (!response) {
            return { statusCode: 500, message: "This cat paragraph doesn\'t create", error: "Create Error" };
        }
        return response;
    }
    async findCatParagraph(id) {
        const response = await this.catParagraphsService.findCatParagraph(id);
        if (!response) {
            return { statusCode: 404, message: "This cat paragraph doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async updateCatParagraph(catParagraphsDto) {
        const response = await this.catParagraphsService.updateCatParagraph(catParagraphsDto);
        if (!response) {
            return { statusCode: 400, message: "This cat paragraph doesn\'t exist", error: "Not Found" };
        }
        return response;
    }
    async deleteCatParagraph(id) {
        const { affected } = await this.catParagraphsService.deleteCatParagraph(id);
        if (affected == 0) {
            return { statusCode: 400, message: "This cat paragraph doesn\'t exist", error: "Not Found" };
        }
        return { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllCatParagraphs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CatParagraphsController.prototype, "getAllCatParagraphs", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createCatParagraphs' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catparagraphs_dto_1.CatParagraphsDto]),
    __metadata("design:returntype", Promise)
], CatParagraphsController.prototype, "createCatParagraphs", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findCatParagraph' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatParagraphsController.prototype, "findCatParagraph", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateCatParagraph' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catparagraphs_dto_1.CatParagraphsDto]),
    __metadata("design:returntype", Promise)
], CatParagraphsController.prototype, "updateCatParagraph", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteCatParagraph' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatParagraphsController.prototype, "deleteCatParagraph", null);
CatParagraphsController = __decorate([
    (0, common_1.Controller)('cat-paragraphs'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [cat_paragraphs_service_1.CatParagraphsService, winston_1.Logger])
], CatParagraphsController);
exports.CatParagraphsController = CatParagraphsController;
//# sourceMappingURL=cat_paragraphs.controller.js.map