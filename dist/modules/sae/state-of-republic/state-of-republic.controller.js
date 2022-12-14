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
exports.StateOfRepublicController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const state_of_republic_service_1 = require("./state-of-republic.service");
const state_of_republic_dto_1 = require("./dto/state-of-republic.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let StateOfRepublicController = class StateOfRepublicController {
    constructor(stateOfRepublicService, logger) {
        this.stateOfRepublicService = stateOfRepublicService;
        this.logger = logger;
    }
    async createStateOfRepublic(stateOfRepublicDto) {
        const stateCreated = await this.stateOfRepublicService.createStateOfRepublic(stateOfRepublicDto);
        return stateCreated
            ? stateCreated
            : { statusCode: 503, message: "This state of was not created", error: "Create Error" };
    }
    async getAllStatesOfRepublic({ inicio, pageSize }) {
        return await this.stateOfRepublicService.getAllStatesOfRepublic({ inicio, pageSize });
    }
    async getStateOfRepublicByStateCode(stateCode) {
        const stateFound = await this.stateOfRepublicService.getStateOfRepublicByStateCode(stateCode);
        return stateFound
            ? stateFound
            : { statusCode: '404', message: 'State Of Republic not found', error: "Not found" };
    }
    async updateStateOfRepublic(stateData) {
        const stateUpdated = await this.stateOfRepublicService.updateStateOfRepublic(stateData.stateCodeToUpdate, stateData);
        return stateUpdated
            ? stateUpdated
            : { statusCode: '404', message: 'State Of Republic not found', error: "Not found" };
    }
    async deleteStateOfRepublic(stateCode) {
        const { affected } = await this.stateOfRepublicService.deleteStateOfRepublic(stateCode);
        return affected == 0
            ? { statusCode: '404', message: 'State Of Republic not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createStateOfRepublic' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [state_of_republic_dto_1.StateOfRepublicDto]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "createStateOfRepublic", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllStatesOfRepublic' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "getAllStatesOfRepublic", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getStateOfRepublicByStateCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "getStateOfRepublicByStateCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateStateOfRepublic' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "updateStateOfRepublic", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteStateOfRepublic' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "deleteStateOfRepublic", null);
StateOfRepublicController = __decorate([
    (0, common_1.Controller)('state-of-republic'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [state_of_republic_service_1.StateOfRepublicService,
        winston_1.Logger])
], StateOfRepublicController);
exports.StateOfRepublicController = StateOfRepublicController;
//# sourceMappingURL=state-of-republic.controller.js.map