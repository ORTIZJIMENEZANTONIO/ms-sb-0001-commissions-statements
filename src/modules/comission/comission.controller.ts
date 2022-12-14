import { Controller, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { MessagePattern } from '@nestjs/microservices';

import { ComissionService } from './comission.service';
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

@Controller('comission')
export class ComissionController {
  constructor(
    private readonly service: ComissionService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @MessagePattern({ cmd: 'centralCoordinate' })
  async centralCoordinate(data: CentralCoordinateDto) {}

  @MessagePattern({ cmd: 'calculateCommissionSpecialRange' })
  async calculateCommissionSpecialRange(data: ComissionSpecialRangeDto) {}

  @MessagePattern({ cmd: 'getPctComissionToSpecial' })
  async getPctComissionToSpecial(data: PctSpecialDto) {}

  @MessagePattern({ cmd: 'calculateCommissionRange' })
  async calculateCommissionRange(data: ComissionRangeDto) {}

  @MessagePattern({ cmd: 'getTotalSolds' })
  async getTotalSolds(data: TotalSoldsDto) {}

  @MessagePattern({ cmd: 'calculateCommission' })
  async calculateCommission(data: CalcCommissionDto) {}

  @MessagePattern({ cmd: 'applyGoodsComission' })
  async applyGoodsComission(data: GoodsComissionDto) {}

  @MessagePattern({ cmd: 'calculateComissionTotal' })
  async calculateComissionTotal(data: ComissionTotalDto) {}

  @MessagePattern({ cmd: 'updateComissionData' })
  async updateComissionData(data: UpdtComissionDto) {}

  @MessagePattern({ cmd: 'deleteComission' })
  async deleteComission(comId: Number) {}

  @MessagePattern({ cmd: 'getGoodsInCalculateComission' })
  async getGoodsInCalculateComission(comId: Number) {}

  @MessagePattern({ cmd: 'getPaidGoodsInDates' })
  async getPaidGoodsInDates(data: PaidGoodsInDatesDto) {}

  @MessagePattern({ cmd: 'copyEvenLot' })
  async copyEvenLot() {}

  @MessagePattern({ cmd: 'markLotsDateGreater' })
  async markLotsDateGreater(date: Date) {}

  @MessagePattern({ cmd: 'markLotsDateMinor' })
  async markLotsDateMinor(date: Date) {}

  @MessagePattern({ cmd: 'deleteLotsPaymentsDateMinor' })
  async deleteLotsPaymentsDateMinor(startDate: Date) {}

  @MessagePattern({ cmd: 'getGoodsPaidFromEvent' })
  async getGoodsPaidFromEvent(data: GoodsPaidFromEventDto) {}

  @MessagePattern({ cmd: 'insertGoods' })
  async insertGoods(data: InsrtGoodDto) {}

  @MessagePattern({ cmd: 'getGlobalParams' })
  async getGlobalParams(data: GlobalParamsDto): Promise<string> {
    return "";
  }
}
