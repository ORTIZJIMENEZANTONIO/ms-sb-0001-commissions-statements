import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComissionService } from "./comission.service";
import { ComissionController } from "./comission.controller";
import { ComerComissionxbGoodEntity } from "./entities/comer-comission-x-good.entity";
import { ComerLotEntity } from "./entities/comer-lot.entity";
import { ComerPaymentRefEntity } from "./entities/comer-payment-ref.entity";

@Module({
  imports: [TypeOrmModule.forFeature([
    ComerComissionxbGoodEntity,
    ComerLotEntity,
    ComerPaymentRefEntity
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
