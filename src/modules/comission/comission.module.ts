import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComissionService } from "./comission.service";
import { ComissionController } from "./comission.controller";

@Module({
  imports: [TypeOrmModule.forFeature([])],
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
