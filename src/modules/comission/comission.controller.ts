import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { ComissionService } from "./comission.service";
import { GlobalParamsDto } from "./dto/get-global-params.dto";
import { InsrtGoodDto } from "./dto/insrt-goods.dto";
import { GoodsPaidFromEventDto } from "./dto/get-goods-paid-from-event.dto";
import { PaidGoodsInDatesDto } from "./dto/get-paid-goods-In-dates.dto";
import { UpdtComissionDto } from "./dto/updt-comission.dto";
import { ComissionTotalDto } from "./dto/calc-comission-total.dto";
import { GoodsComissionDto } from "./dto/goods-comission.dto";
import { CalcCommissionDto } from "./dto/calc-comission.dto";
import { TotalSoldsDto } from "./dto/get-total-solds.dto";
import { ComissionRangeDto } from "./dto/calc-comission-range.dto";
import { PctSpecialDto } from "./dto/get-pct.dto";
import { ComissionSpecialRangeDto } from "./dto/comission-special-range.dto";
import { CentralCoordinateDto } from "./dto/central-coordinate.dto";

@Controller("comission")
export class ComissionController {
  constructor(
    private readonly service: ComissionService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "centralCoordinate" })
  async centralCoordinate(data: CentralCoordinateDto) {
    return await this.service.centralCoordinate(data);
  }

  @MessagePattern({ cmd: "calculateCommissionSpecialRange" })
  async calculateCommissionSpecialRange(data: ComissionSpecialRangeDto) {
    return await this.service.calculateCommissionSpecialRange(data);
  }

  @MessagePattern({ cmd: "getPctComissionToSpecial" })
  async getPctComissionToSpecial(data: PctSpecialDto) {
    return await this.service.getPctComissionToSpecial(data);
  }

  @MessagePattern({ cmd: "calculateCommissionRange" })
  async calculateCommissionRange(data: ComissionRangeDto) {
    return await this.service.calculateCommissionRange(data);
  }

  @MessagePattern({ cmd: "getTotalSolds" })
  async getTotalSolds(data: TotalSoldsDto) {
    return await this.service.getTotalSolds(data);
  }

  @MessagePattern({ cmd: "calculateCommission" })
  async calculateCommission(data: CalcCommissionDto) {
    return await this.service.calculateCommission(data);
  }

  @MessagePattern({ cmd: "applyGoodsComission" })
  async applyGoodsComission(data: GoodsComissionDto) {
    return await this.service.applyGoodsComission(data);
  }

  @MessagePattern({ cmd: "calculateComissionTotal" })
  async calculateComissionTotal(data: ComissionTotalDto) {
    return await this.service.calculateComissionTotal(data);
  }

  @MessagePattern({ cmd: "updateComissionData" })
  async updateComissionData(data: UpdtComissionDto) {
    return await this.service.updateComissionData(data);
  }

  @MessagePattern({ cmd: "deleteComission" })
  async deleteComission(comId: Number) {
    return await this.service.deleteComission(comId);
  }

  @MessagePattern({ cmd: "getGoodsInCalculateComission" })
  async getGoodsInCalculateComission(comId: Number) {
    return await this.service.getGoodsInCalculateComission(comId);
  }

  @MessagePattern({ cmd: "getPaidGoodsInDates" })
  async getPaidGoodsInDates(data: PaidGoodsInDatesDto) {
    return await this.service.getPaidGoodsInDates(data);
  }

  @MessagePattern({ cmd: "copyEvenLot" })
  async copyEvenLot() {
    return await this.service.copyEvenLot();
  }

  @MessagePattern({ cmd: "markLotsDateGreater" })
  async markLotsDateGreater(date: Date) {
    return await this.service.markLotsDateGreater(date);
  }

  @MessagePattern({ cmd: "markLotsDateMinor" })
  async markLotsDateMinor(date: Date) {
    return await this.service.markLotsDateMinor(date);
  }

  @MessagePattern({ cmd: "deleteLotsPaymentsDateMinor" })
  async deleteLotsPaymentsDateMinor(startDate: Date) {
    return await this.service.deleteLotsPaymentsDateMinor(startDate);
  }

  @MessagePattern({ cmd: "getGoodsPaidFromEvent" })
  async getGoodsPaidFromEvent(data: GoodsPaidFromEventDto) {
    return await this.service.getGoodsPaidFromEvent(data);
  }

  @MessagePattern({ cmd: "insertGoods" })
  async insertGoods(data: InsrtGoodDto) {
    return await this.service.insertGoods(data);
  }

  @MessagePattern({ cmd: "getGlobalParams" })
  async getGlobalParams(data: GlobalParamsDto): Promise<string> {
    return await this.service.getGlobalParams(data);
  }
}
