import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComissionService } from "./comission.service";
import { ComissionController } from "./comission.controller";
import { ComerComissionxbGoodEntity } from "./entities/comer-comission-x-good.entity";

@Module({
  imports: [TypeOrmModule.forFeature([
    ComerComissionxbGoodEntity
  ])],
  controllers: [ComissionController],
  providers: [
    ComissionService,
    makeCounterProvider({
      name: "comer_comission_served",
      help: "comer_comission_help",
    }),
  ],
})
export class ComissionModule {}
