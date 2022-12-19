import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
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
import { ComerComissionxbGoodEntity } from "./entities/comer-comission-x-good.entity";
import { ComerPaymentRefEntity } from "./entities/comer-payment-ref.entity";
import { ComerLotEntity } from "./entities/comer-lot.entity";
export declare class ComissionService {
    private entity;
    private entityLot;
    private entityPayment;
    private readonly logger;
    counter: Counter<string>;
    protected lbfLots: any[];
    protected lbfPayment: any[];
    protected lbfAux: any[];
    constructor(entity: Repository<ComerComissionxbGoodEntity>, entityLot: Repository<ComerLotEntity>, entityPayment: Repository<ComerPaymentRefEntity>, logger: Logger, counter: Counter<string>);
    centralCoordinate(data: CentralCoordinateDto): Promise<void>;
    calculateCommissionSpecialRange(data: ComissionSpecialRangeDto): Promise<string>;
    getPctComissionToSpecial(data: PctSpecialDto): Promise<Number>;
    calculateCommissionRange(data: ComissionRangeDto): Promise<string>;
    getTotalSolds(data: TotalSoldsDto): Promise<number>;
    calculateCommission(data: CalcCommissionDto): Promise<any>;
    applyGoodsComission(data: GoodsComissionDto): Promise<string>;
    calculateComissionTotal(data: ComissionTotalDto): Promise<void>;
    updateComissionData(data: UpdtComissionDto): Promise<import("typeorm").UpdateResult>;
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
