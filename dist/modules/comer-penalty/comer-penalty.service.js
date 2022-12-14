"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerPenaltyService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_tpenalty_entity_1 = require("./entities/comer-tpenalty.entity");
const comer_client_entity_1 = require("./entities/comer-client.entity");
const comer_penalty_his_entity_1 = require("./entities/comer-penalty-his.entity");
const comer_penalty_entity_1 = require("./entities/comer-penalty.entity");
const comer_event_entity_1 = require("./entities/comer-event.entity");
const comer_lot_entity_1 = require("./entities/comer-lot.entity");
let ComerPenaltyService = class ComerPenaltyService {
    constructor(entity, entityHis, entityClient, entityTPenalty, entityEvent, entityLot, logger, counter) {
        this.entity = entity;
        this.entityHis = entityHis;
        this.entityClient = entityClient;
        this.entityTPenalty = entityTPenalty;
        this.entityEvent = entityEvent;
        this.entityLot = entityLot;
        this.logger = logger;
        this.counter = counter;
    }
    async registerPenalty(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const { clientId, eventId, publicLot, penaltyDate, penaltyId, observations, penaltyUser, } = data;
        let pStatusProcess = 1;
        let pMsgProcess = `Se registro la penalización para el cliente : ${clientId}`;
        const nowDate = new Date();
        let lvPenalty = 0;
        let lvPeriniDate = new Date().toISOString().substring(0, 10);
        let lvPerEndDate = new Date().toISOString().substring(0, 10);
        const lvValEvent = (_a = (await this.entityEvent
            .createQueryBuilder()
            .select([`COUNT(0) as "total"`])
            .where(`ID_EVENTO = ${eventId}`)
            .getRawOne()).total) !== null && _a !== void 0 ? _a : 0;
        if (lvValEvent == 0) {
            pMsgProcess = 'El Evento no está registrado, verifique su información';
            return pStatusProcess;
        }
        const lvValLots = (_b = (await this.entityLot
            .createQueryBuilder()
            .select([`COUNT(0) as "total"`])
            .where(`ID_EVENTO = ${eventId}`)
            .andWhere(`LOTE_PUBLICO = ${publicLot}`)
            .getRawOne()).total) !== null && _b !== void 0 ? _b : 0;
        if (lvValLots == 0) {
            const pStatusProcess = `El lote ${publicLot} no esta registrado en en el evento  ${eventId}`;
            return pStatusProcess;
        }
        const lvIdLot = (await this.entityLot
            .createQueryBuilder()
            .select([`ID_LOTE as "id"`])
            .where(`ID_EVENTO = ${eventId}`)
            .andWhere(`LOTE_PUBLICO = ${publicLot}`)
            .getRawOne()).id;
        const flimit = new Date(nowDate.setDate(nowDate.getDate() - 10));
        if (new Date(penaltyDate) < flimit) {
            pMsgProcess = `La fecha de penalización, no puede ser menor a la actual`;
            return pMsgProcess;
        }
        const lvValPenalty = (_c = (await this.entityTPenalty
            .createQueryBuilder()
            .select([`COUNT(0) as "total"`])
            .where(`ID_PENALIZACION = ${penaltyId}`)
            .getRawOne()).total) !== null && _c !== void 0 ? _c : 0;
        if (lvValPenalty == 0) {
            pMsgProcess = `El tipo de penalización ${penaltyId}  no es válido, verifique su información`;
        }
        if (pStatusProcess == 1) {
            const lvRegPenalty = (_d = (await this.entity
                .createQueryBuilder()
                .select([`COUNT(0) as "total"`])
                .where(`ID_CLIENTE = ${clientId}`)
                .getRawOne()).total) !== null && _d !== void 0 ? _d : 0;
            if (lvRegPenalty == 0) {
                const lvDaysPenalty = (_e = (await this.entityTPenalty
                    .createQueryBuilder()
                    .select([`DIAS_PENALIZACION as "days"`])
                    .where(`ID_PENALIZACION = ${penaltyId}`)
                    .getRawOne()).days) !== null && _e !== void 0 ? _e : 720;
                lvPeriniDate = new Date(new Date(penaltyDate).setDate(new Date(penaltyDate).getDate() - lvDaysPenalty))
                    .toISOString()
                    .substring(0, 10);
                if (penaltyId == 4) {
                    const lvTotPenalty = (_f = (await this.entityHis
                        .createQueryBuilder()
                        .select([`count(0)  as "tptal"`])
                        .where(`ID_CLIENTE in (4,7,10)`)
                        .getRawOne()).total) !== null && _f !== void 0 ? _f : 0;
                    const lvValTypePenalty = (_g = (await this.entityHis
                        .createQueryBuilder()
                        .select([`count(0)  as "tptal"`])
                        .where(`ID_CLIENTE = ${clientId}`)
                        .andWhere(`FECHA_INICIAL between '${lvPeriniDate}' and '${penaltyDate}'`)
                        .andWhere(`ID_PENALIZACION in (4,7,10)`)
                        .getRawOne()).total) !== null && _g !== void 0 ? _g : 0;
                    lvPenalty =
                        lvValTypePenalty != 0 && lvTotPenalty == 1
                            ? 7
                            : lvValTypePenalty != 0 && lvTotPenalty >= 2
                                ? 10
                                : penaltyId;
                }
                if (penaltyId == 5) {
                    const lvTotPenalty = (_h = (await this.entityHis
                        .createQueryBuilder()
                        .select([`count(0)  as "tptal"`])
                        .where(`ID_CLIENTE in (5,8,11)`)
                        .getRawOne()).total) !== null && _h !== void 0 ? _h : 0;
                    const lvValTypePenalty = (_j = (await this.entityHis
                        .createQueryBuilder()
                        .select([`count(0)  as "tptal"`])
                        .where(`ID_CLIENTE = ${clientId}`)
                        .andWhere(`FECHA_INICIAL between '${lvPeriniDate}' and '${penaltyDate}'`)
                        .andWhere(`ID_PENALIZACION in (5,8,11)`)
                        .getRawOne()).total) !== null && _j !== void 0 ? _j : 0;
                    lvPenalty =
                        lvValTypePenalty != 0 && lvTotPenalty == 1
                            ? 8
                            : lvValTypePenalty != 0 && lvTotPenalty >= 2
                                ? 11
                                : penaltyId;
                }
                if (penaltyId == 6) {
                    const lvTotPenalty = (_k = (await this.entityHis
                        .createQueryBuilder()
                        .select([`count(0)  as "tptal"`])
                        .where(`ID_CLIENTE in (6,9,12)`)
                        .getRawOne()).total) !== null && _k !== void 0 ? _k : 0;
                    const lvValTypePenalty = (_l = (await this.entityHis
                        .createQueryBuilder()
                        .select([`count(0)  as "tptal"`])
                        .where(`ID_CLIENTE = ${clientId}`)
                        .andWhere(`FECHA_INICIAL between '${lvPeriniDate}' and '${penaltyDate}'`)
                        .andWhere(`ID_PENALIZACION in (6,9,12)`)
                        .getRawOne()).total) !== null && _l !== void 0 ? _l : 0;
                    lvPenalty =
                        lvValTypePenalty != 0 && lvTotPenalty == 1
                            ? 9
                            : lvValTypePenalty != 0 && lvTotPenalty >= 2
                                ? 12
                                : penaltyId;
                }
            }
            else {
                let lvPenalty = (_m = (await this.entity
                    .createQueryBuilder()
                    .select([`ID_PENALIZACION as "id"`])
                    .where(` ID_CLIENTE = ${clientId}`)
                    .getRawOne()).id) !== null && _m !== void 0 ? _m : 0;
                if (lvPenalty == 4 || lvPenalty == 7 || lvPenalty == 10) {
                    lvPenalty =
                        lvPenalty == 4
                            ? 7
                            : lvPenalty == 7 || lvPenalty == 10
                                ? 10
                                : penaltyId;
                }
                else if (lvPenalty == 5 || lvPenalty == 8 || lvPenalty == 11) {
                    lvPenalty =
                        lvPenalty == 5
                            ? 8
                            : lvPenalty == 8 || lvPenalty == 11
                                ? 11
                                : penaltyId;
                }
                else if (lvPenalty == 6 || lvPenalty == 9 || lvPenalty == 12) {
                    lvPenalty =
                        lvPenalty == 6
                            ? 9
                            : lvPenalty == 9 || lvPenalty == 12
                                ? 12
                                : penaltyId;
                }
                else {
                    lvPenalty = penaltyId;
                }
                lvPeriniDate =
                    typeof penaltyDate === 'string'
                        ? penaltyDate
                        : penaltyDate.toISOString().substring(0, 10);
                lvPerEndDate = (await this.getFinalDate({
                    penaltyId: lvPenalty,
                    penaltyDate: new Date(lvPeriniDate),
                }))
                    .toISOString()
                    .substring(0, 10);
                const partialBody = await this.entity
                    .createQueryBuilder()
                    .select([
                    `ID_CLIENTE as "clientId"`,
                    `ID_LOTE as "lotId"`,
                    `ID_PENALIZACION as "id"`,
                    `ID_EVENTO as "eventId"`,
                    `LOTE_PUBLICO as "publicLot"`,
                    `FECHA_INICIAL as "startDate"`,
                    `FECHA_FINAL as "endDate"`,
                    `TIPO_PROCESO as "typeProcess"`,
                    `REFE_OFICIO_OTRO as "refeOfficeOther"`,
                    `USUARIO as "user"`,
                    `P_BANDERA as "flag"`,
                    `USR_PENALIZA as "userPenalty"`,
                    `FEC_PENALIZA as "penaltyDate"`,
                ])
                    .where(`ID_CLIENTE = ${clientId}`)
                    .getRawMany();
                this.entityHis.save(partialBody);
                this.entity
                    .createQueryBuilder()
                    .delete()
                    .from(comer_penalty_entity_1.ComerPenaltyEntity)
                    .where(`ID_CLIENTE = ${clientId}`)
                    .execute();
            }
            const insrtPenaltyQuery = `
        INSERT INTO sera.COMER_PENALIZACIONES(
          ID_CLIENTE,
          ID_LOTE,
          ID_PENALIZACION,
          ID_EVENTO,
          LOTE_PUBLICO,
          FECHA_INICIAL,
          FECHA_FINAL,
          TIPO_PROCESO,
          REFE_OFICIO_OTRO,
          USUARIO,
          P_BANDERA,
          USR_PENALIZA,
          FEC_PENALIZA
        ) VALUES (
          ${clientId},
          ${lvIdLot},
          ${lvPenalty},
          ${eventId},
          ${publicLot},
          '${lvPeriniDate}',
          '${lvPerEndDate}',
          ${lvPenalty},
          '${observations}',
          user,
          1,
          '${penaltyUser}',
          '${penaltyDate}'
        )
      `;
            const updtClientQuery = `
        UPDATE sera.COMER_CLIENTES
        SET
          LISTA_NEGRA = 'S',
          FECHA_LISTA_NEGRA = '${penaltyDate}',
          FEC_INI_PENALIZACION = '${lvPeriniDate}',
          FEC_FIN_PENALIZACION = '${lvPerEndDate}',
          ID_PENALIZACION = ${lvPenalty},
          USU_PENALIZA = '${penaltyUser}'
        WHERE
          ID_CLIENTE = ${clientId};
      `;
            try {
                await this.entity.query(insrtPenaltyQuery);
                await this.entityClient.query(updtClientQuery);
            }
            catch (err) {
                return err.detail;
            }
        }
        return pMsgProcess;
    }
    async updatePenalty(data) {
        const { clientId, releaseDate, userRelease, releaseCause } = data;
        const penaltiesQuery = this.entity
            .createQueryBuilder('p')
            .select([
            `FECHA_INICIAL as "startDate"`,
            `FECHA_FINAL as "endDate"`,
            `ID_CLIENTE as "clientId"`,
            `ID_PENALIZACION as "penaltyId"`,
            `ID_EVENTO as "eventId"`,
            `LOTE_PUBLICO as "publicLot"`,
            `TIPO_PROCESO as "typeProcess"`,
            `USUARIO as "user"`,
            `REFE_OFICIO_OTRO as "refeOfficeOther"`,
            `USR_PENALIZA as "userPenalty"`,
            `FEC_PENALIZA as "penaltiDate"`,
        ])
            .where(`ID_CLIENTE = ${clientId}`);
        const penalties = await penaltiesQuery.getRawMany();
        let pStatusProcess = 1;
        let pMsgProcess = `Se liberó de penalización el cliente número  : ${clientId} en la fecha ${releaseDate}`;
        const historicPenalty = [];
        const penaltyDetails = [];
        const clientsCatalogue = [];
        const message = {
            historicPenalty: '',
            penaltyDetails: '',
            clientsCatalogue: '',
            result: pMsgProcess,
        };
        for (const pe of penalties) {
            const body = Object.assign(Object.assign({}, pe), { releaseDate,
                userRelease,
                releaseCause });
            historicPenalty.push(await this.entityHis.save(body));
            penaltyDetails.push(await this.entity.delete({
                clientId: pe.clientId,
            }));
            const updated = this.entity.query(`
        UPDATE sera.COMER_CLIENTES
        SET
          LISTA_NEGRA = 'N',
          FECHA_LISTA_NEGRA = NULL,
          FEC_INI_PENALIZACION = NULL,
          FEC_FIN_PENALIZACION = NULL,
          USU_LIBERA = '${userRelease}',
          FECHA_LIBERACION = NOW()
        WHERE
          ID_CLIENTE = ${pe.clientId};
      `);
            clientsCatalogue.push(await updated);
        }
        message.historicPenalty = `${historicPenalty.length} registros guardados en histórico`;
        message.penaltyDetails = `${penaltyDetails.length} registros de penalizaciones eliminados`;
        message.clientsCatalogue = `${clientsCatalogue.length} registros de catálogo de clientes actualizados`;
        return message;
    }
    async releasePenalty(data) {
        const { releaseDate } = data;
        const historicPenalty = [];
        const penaltyDetails = [];
        const clientsCatalogue = [];
        const message = {
            historicPenalty: '',
            penaltyDetails: '',
            clientsCatalogue: '',
        };
        const clientsQuery = this.entityClient
            .createQueryBuilder()
            .select([
            `ID_CLIENTE as "clientId"`,
            `FECHA_LISTA_NEGRA as "blackListDate"`,
            `FEC_INI_PENALIZACION "startDate"`,
            `FEC_FIN_PENALIZACION as "endDate"`,
        ])
            .where(`LISTA_NEGRA = 'S'`)
            .andWhere(`FEC_INI_PENALIZACION <= '${releaseDate}'`);
        const clients = await clientsQuery.getRawMany();
        for (const client of clients) {
            const penalty = await this.entity.query(`SELECT
        FECHA_INICIAL as "startDate",
        FECHA_FINAL as "endDate",
        ID_CLIENTE as "clientId",
        ID_PENALIZACION as "id",
        ID_EVENTO as "eventId",
        LOTE_PUBLICO as "publicLot",
        TIPO_PROCESO as "typeProcess",
        USUARIO as "user",
        REFE_OFICIO_OTRO as "refeOfficeOther",
        USR_PENALIZA as "userPenalty",
        FEC_PENALIZA as "penaltyDate",
        USER as "userRelease",
        NOW() as "releaseDate",
        'LIBERACIÓN POR PROCESO AUTOMATICO' as "releaseCause"
      FROM
        sera.COMER_PENALIZACIONES
      WHERE
        ID_CLIENTE = ${client.clientId}`);
            penalty.length > 0
                ? historicPenalty.push(await this.entityHis.save(penalty[0]))
                : null;
            penaltyDetails.push(await this.entity.delete({
                clientId: client.clientId,
            }));
            const updated = this.entity.query(`
        UPDATE sera.COMER_CLIENTES
        SET
          LISTA_NEGRA = 'N',
          FECHA_LISTA_NEGRA = NULL,
          FEC_INI_PENALIZACION = NULL,
          FEC_FIN_PENALIZACION = NULL,
          USU_LIBERA = USER,
          FECHA_LIBERACION = NOW()
        WHERE
          ID_CLIENTE = ${client.clientId};
      `);
            clientsCatalogue.push(await updated);
        }
        message.historicPenalty = `${historicPenalty.length} registros guardados en histórico`;
        message.penaltyDetails = `${penaltyDetails.length} registros de penalizaciones eliminados`;
        message.clientsCatalogue = `${clientsCatalogue.length} registros de catálogo de clientes actualizados`;
        return message;
    }
    async getFinalDate(data) {
        var _a;
        const { penaltyId, penaltyDate } = data;
        const lvDaysQuery = this.entityTPenalty
            .createQueryBuilder()
            .select([`DIAS_PENALIZACION as "days"`])
            .where(`ID_PENALIZACION = '${penaltyId}'`);
        const lvDays = (_a = (await lvDaysQuery.getRawOne()).days) !== null && _a !== void 0 ? _a : 0;
        const penaltyDateFormat = new Date(penaltyDate);
        const lvFinalDate = penaltyDateFormat.setDate(penaltyDateFormat.getDate() + Number(lvDays));
        return new Date(lvFinalDate);
    }
    async penaltyReverse(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        const { clientId, eventId, publicLot } = data;
        let pEstProcess = 1;
        let pMsgProcess = `Se reverso la penalización para el cliente : ${clientId}`;
        const lvValClient = (_a = (await this.entityClient
            .createQueryBuilder()
            .select([`COUNT(0) as "total"`])
            .where(`ID_CLIENTE = ${clientId}`)
            .getRawOne()).total) !== null && _a !== void 0 ? _a : 0;
        const lvValEvent = (_b = (await this.entityEvent
            .createQueryBuilder()
            .select([`COUNT(0) as "total"`])
            .where(`ID_EVENTO = ${eventId}`)
            .getRawOne()).total) !== null && _b !== void 0 ? _b : 0;
        const lvValLot = (_c = (await this.entityLot
            .createQueryBuilder()
            .select([`COUNT(0) as "total"`])
            .where(`ID_EVENTO = ${eventId}`)
            .andWhere(`LOTE_PUBLICO = ${publicLot}`)
            .getRawOne()).total) !== null && _c !== void 0 ? _c : 0;
        if (lvValClient == 0)
            return {
                message: 'El Clinte no está registrado, verifique su información',
                status: 0,
            };
        if (lvValEvent == 0)
            return {
                message: 'El Evento no está registrado, verifique su información',
                status: 0,
            };
        if (lvValLot == 0)
            return {
                message: 'El Evento no está registrado, verifique su información',
                status: 0,
            };
        if (pEstProcess == 1) {
            const lvToTPenaHis = (_d = (await this.entity
                .createQueryBuilder()
                .select([`count(0) as "total"`])
                .where(`ID_CLIENTE = ${clientId}`)
                .getRawOne()).total) !== null && _d !== void 0 ? _d : 0;
            if (lvToTPenaHis > 0) {
                const lvToTPenaHis = (_e = (await this.entity
                    .createQueryBuilder()
                    .select([`count(0) as "total"`])
                    .where(`ID_CLIENTE = ${clientId}`)
                    .andWhere(`LOTE_PUBLICO = ${publicLot}`)
                    .getRawOne()).total) !== null && _e !== void 0 ? _e : 0;
                if (lvToTPenaHis > 0) {
                    const updtClientQuery = `
            UPDATE sera.COMER_CLIENTES
            SET
              LISTA_NEGRA = 'S',
              FECHA_LISTA_NEGRA = null,
              FEC_INI_PENALIZACION = null,
              FEC_FIN_PENALIZACION = null,
              ID_PENALIZACION = null,
              USU_PENALIZA = null
            WHERE
              ID_CLIENTE = ${clientId};
          `;
                    await this.entity
                        .createQueryBuilder()
                        .delete()
                        .from(comer_penalty_entity_1.ComerPenaltyEntity)
                        .where(`ID_EVENTO = ${eventId} `)
                        .andWhere(`LOTE_PUBLICO = ${publicLot}`)
                        .execute();
                    await this.entityClient.query(updtClientQuery);
                    const maxRegister = (_f = (await this.entityHis
                        .createQueryBuilder()
                        .select([`MAX(NO_REGISTRO) as "max"`])
                        .where(` ID_CLIENTE = ${clientId}`)
                        .getRawOne()).max) !== null && _f !== void 0 ? _f : 0;
                    const datesUserQuery = (_g = (await this.entityHis
                        .createQueryBuilder()
                        .select([
                        `FECHA_INICIAL as "startDate"`,
                        `FECHA_FINAL as "endDate"`,
                        `USUARIO as "user"`,
                    ])
                        .where(` ID_CLIENTE = ${clientId}`)
                        .andWhere(`NO_REGISTRO = ${maxRegister}`)
                        .getRawOne())) !== null && _g !== void 0 ? _g : {
                        startDate: new Date().toISOString().substring(0, 10),
                        endDate: new Date().toISOString().substring(0, 10),
                        user: 'Dev',
                    };
                    const { startDate, endDate, user } = datesUserQuery;
                    await this.entity.query(`
            INSERT INTO COMER_PENALIZACIONES (
              ID_CLIENTE,
              ID_LOTE,
              ID_PENALIZACION,
              ID_EVENTO,
              LOTE_PUBLICO,
              FECHA_INICIAL,
              FECHA_FINAL,
              TIPO_PROCESO,
              REFE_OFICIO_OTRO,
              USUARIO,
              P_BANDERA
            )
              SELECT
                ID_CLIENTE,
                ID_LOTE,
                ID_PENALIZACION,
                ID_EVENTO,
                LOTE_PUBLICO,
                FECHA_INICIAL,
                FECHA_FINAL,
                TIPO_PROCESO,
                REFE_OFICIO_OTRO,
                USUARIO,
                BANDERA
              FROM
                COMER_PENALIZACIONES_HIS
              WHERE
                ID_CLIENTE = ${clientId}
                AND FECHA_FINAL >= '${new Date()
                        .toISOString()
                        .substring(0, 10)}'
                AND NO_REGISTRO = (
                  SELECT
                    MAX(NO_REGISTRO)
                  FROM
                    COMER_PENALIZACIONES_HIS
                  WHERE
                    ID_CLIENTE = ${clientId}
                );
          `);
                    const updtClientQry = `
            UPDATE sera.COMER_CLIENTES
            SET
              LISTA_NEGRA = 'S',
              FECHA_LISTA_NEGRA = '${startDate}',
              FEC_INI_PENALIZACION = '${startDate}',
              FEC_FIN_PENALIZACION = '${endDate}',
              USU_PENALIZA = '${user}'
            WHERE
              ID_CLIENTE = ${clientId};
          `;
                    await this.entityClient.query(updtClientQry);
                    await this.entityHis
                        .createQueryBuilder()
                        .delete()
                        .from(comer_penalty_his_entity_1.ComerPenaltyHisEntity)
                        .where(`ID_CLIENTE = ${clientId} `)
                        .andWhere(`LFECHA_FINAL >=  ${new Date().toISOString().substring(0, 10)}`)
                        .andWhere(`AND NO_REGISTRO = (
                SELECT
                  MAX(NO_REGISTRO)
                FROM
                  sera.COMER_PENALIZACIONES_HIS
                WHERE
                  ID_CLIENTE = P_ID_CLIENTE
              )`)
                        .execute();
                }
                else {
                    const registerNumber = await this.entityHis
                        .createQueryBuilder()
                        .select([` NO_REGISTRO as "num"`])
                        .where(`ID_CLIENTE = ${clientId}`)
                        .andWhere(`ID_EVENTO = ${eventId}`)
                        .andWhere(`LOTE_PUBLICO = ${publicLot}`)
                        .getRawOne();
                }
            }
        }
        return pMsgProcess;
    }
};
ComerPenaltyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_penalty_entity_1.ComerPenaltyEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_penalty_his_entity_1.ComerPenaltyHisEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_client_entity_1.ComerClientEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(comer_tpenalty_entity_1.ComerTPenaltyEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(comer_event_entity_1.ComerEventEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(comer_lot_entity_1.ComerLotEntity)),
    __param(6, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(7, (0, nestjs_prometheus_1.InjectMetric)('comer_penalty_served')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerPenaltyService);
exports.ComerPenaltyService = ComerPenaltyService;
//# sourceMappingURL=comer-penalty.service.js.map