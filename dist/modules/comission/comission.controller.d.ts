import { Logger } from "winston";
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
export declare class ComissionController {
    private readonly service;
    private readonly logger;
    constructor(service: ComissionService, logger: Logger);
    centralCoordinate(data: CentralCoordinateDto): Promise<void>;
    calculateCommissionSpecialRange(data: ComissionSpecialRangeDto): Promise<string>;
    getPctComissionToSpecial(data: PctSpecialDto): Promise<Number>;
    calculateCommissionRange(data: ComissionRangeDto): Promise<string>;
    getTotalSolds(data: TotalSoldsDto): Promise<number>;
    calculateCommission(data: CalcCommissionDto): Promise<any>;
    applyGoodsComission(data: GoodsComissionDto): Promise<string>;
    calculateComissionTotal(data: ComissionTotalDto): Promise<void>;
    updateComissionData(data: UpdtComissionDto): Promise<number>;
    deleteComission(comId: Number): Promise<import("typeorm").DeleteResult>;
    getGoodsInCalculateComission(comId: Number): Promise<void>;
    getPaidGoodsInDates(data: PaidGoodsInDatesDto): Promise<void>;
    copyEvenLot(): Promise<void>;
    markLotsDateGreater(date: Date): Promise<void>;
    markLotsDateMinor(date: Date): Promise<void>;
    deleteLotsPaymentsDateMinor(startDate: Date): Promise<string>;
    getGoodsPaidFromEvent(data: GoodsPaidFromEventDto): Promise<string>;
    insertGoods(data: InsrtGoodDto): Promise<any>;
    getGlobalParams(data: GlobalParamsDto): Promise<string>;
}
