"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateOfRepublicModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const state_of_republic_entity_1 = require("./entities/state-of-republic.entity");
const state_of_republic_service_1 = require("./state-of-republic.service");
const state_of_republic_controller_1 = require("./state-of-republic.controller");
let StateOfRepublicModule = class StateOfRepublicModule {
};
StateOfRepublicModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([state_of_republic_entity_1.StateOfRepublicEntity])],
        providers: [state_of_republic_service_1.StateOfRepublicService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'state_of_republic_served',
                help: 'state_of_republic_help'
            })
        ],
        controllers: [state_of_republic_controller_1.StateOfRepublicController]
    })
], StateOfRepublicModule);
exports.StateOfRepublicModule = StateOfRepublicModule;
//# sourceMappingURL=state-of-republic.module.js.map