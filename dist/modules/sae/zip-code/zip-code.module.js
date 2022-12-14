"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const zipCodeEntity_entity_1 = require("./entities/zipCodeEntity.entity");
const zip_code_service_1 = require("./zip-code.service");
const zip_code_controller_1 = require("./zip-code.controller");
let ZipCodeModule = class ZipCodeModule {
};
ZipCodeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([zipCodeEntity_entity_1.ZipCodeEntity])],
        providers: [zip_code_service_1.ZipCodeService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'zip_code_served',
                help: 'zip_code_help'
            })
        ],
        controllers: [zip_code_controller_1.ZipCodeController],
    })
], ZipCodeModule);
exports.ZipCodeModule = ZipCodeModule;
//# sourceMappingURL=zip-code.module.js.map