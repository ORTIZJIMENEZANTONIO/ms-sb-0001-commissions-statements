"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatClarificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const chat_clarification_service_1 = require("./chat-clarification.service");
const chat_clarification_controller_1 = require("./chat-clarification.controller");
const chat_clarification_entity_1 = require("./entities/chat-clarification.entity");
let ChatClarificationModule = class ChatClarificationModule {
};
ChatClarificationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([chat_clarification_entity_1.ChatClarificationEntity])],
        providers: [chat_clarification_service_1.ChatClarificationService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'chat_clarification_served',
                help: 'chat_clarification_help'
            })
        ],
        controllers: [chat_clarification_controller_1.ChatClarificationController]
    })
], ChatClarificationModule);
exports.ChatClarificationModule = ChatClarificationModule;
//# sourceMappingURL=chat-clarification.module.js.map