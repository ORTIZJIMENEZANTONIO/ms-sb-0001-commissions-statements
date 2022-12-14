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
exports.ZipCodeController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const zip_code_service_1 = require("./zip-code.service");
const create_zip_code_dto_1 = require("./dto/create-zip-code.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let ZipCodeController = class ZipCodeController {
    constructor(zipCodeService, logger) {
        this.zipCodeService = zipCodeService;
        this.logger = logger;
    }
    createZipCode(createZipCodeDto) {
        const zipCodeCreated = this.zipCodeService.createZipCode(createZipCodeDto);
        return zipCodeCreated
            ? zipCodeCreated
            : { statusCode: 503, message: "This zip code was not created", error: "Create Error" };
    }
    async getAllZipCodes({ inicio, pageSize }) {
        return await this.zipCodeService.getAllZipCodes({ inicio, pageSize });
    }
    async getZipCodeByCode(code) {
        const codeFound = await this.zipCodeService.getOneZipCodeByCode(code);
        return codeFound
            ? codeFound
            : { statusCode: '404', message: 'Zip code not found', error: "Not found" };
    }
    async updateZipCode(zipCodeData) {
        const zipCodeUpdated = await this.zipCodeService.updateZipCode(zipCodeData.codeToUpdate, zipCodeData);
        return zipCodeUpdated
            ? zipCodeUpdated
            : { statusCode: '404', message: 'Zip code not found', error: "Not found" };
    }
    async deleteZipCode(code) {
        const { affected } = await this.zipCodeService.deleteZipCode(code);
        return affected == 0
            ? { statusCode: '404', message: 'Zip code not found', error: "Not found" }
            : { statusCode: '200', message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createZipCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zip_code_dto_1.CreateZipCodeDto]),
    __metadata("design:returntype", void 0)
], ZipCodeController.prototype, "createZipCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllZipCodes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "getAllZipCodes", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getZipCodeByCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "getZipCodeByCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateZipCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "updateZipCode", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteZipCode' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "deleteZipCode", null);
ZipCodeController = __decorate([
    (0, common_1.Controller)('zip-code'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [zip_code_service_1.ZipCodeService,
        winston_1.Logger])
], ZipCodeController);
exports.ZipCodeController = ZipCodeController;
//# sourceMappingURL=zip-code.controller.js.map