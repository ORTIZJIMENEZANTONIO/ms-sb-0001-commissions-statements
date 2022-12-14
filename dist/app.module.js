"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nest_winston_1 = require("nest-winston");
const path = require("path");
const winston = require("winston");
const config_service_1 = require("./shared/config/config.service");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const comission_module_1 = require("./modules/comission/comission.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig()),
            nest_winston_1.WinstonModule.forRoot({
                level: "debug",
                format: winston.format.combine(winston.format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                }), winston.format.errors({ stack: true }), winston.format.splat(), winston.format.json()),
                transports: [
                    new winston.transports.File({
                        dirname: path.join(__dirname, "./../log/debug/"),
                        filename: "debug.log",
                        level: "debug",
                    }),
                    new winston.transports.File({
                        dirname: path.join(__dirname, "./../log/error/"),
                        filename: "error.log",
                        level: "error",
                    }),
                    new winston.transports.File({
                        dirname: path.join(__dirname, "./../log/info/"),
                        filename: "info.log",
                        level: "info",
                    }),
                    new winston.transports.Console({ level: "debug" }),
                ],
            }),
            comission_module_1.ComissionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map