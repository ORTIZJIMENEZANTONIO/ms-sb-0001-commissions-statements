"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeductiveVerificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const deductive_verification_entity_1 = require("./entities/deductive-verification.entity");
const deductive_verification_service_1 = require("./deductive-verification.service");
const deductive_verification_controller_1 = require("./deductive-verification.controller");
let DeductiveVerificationModule = class DeductiveVerificationModule {
};
DeductiveVerificationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([deductive_verification_entity_1.DeductiveVerificationEntity])],
        providers: [deductive_verification_service_1.DeductiveVerificationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'deductive_verification_served',
                help: 'deductive_verification_help'
            })],
        controllers: [deductive_verification_controller_1.DeductiveVerificationController]
    })
], DeductiveVerificationModule);
exports.DeductiveVerificationModule = DeductiveVerificationModule;
//# sourceMappingURL=deductive-verification.module.js.map