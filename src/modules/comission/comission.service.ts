import { Injectable, Inject, Logger, NotFoundException } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';


@Injectable()
export class ComissionService {
  constructor(
    // @InjectRepository(ComerPenaltyEntity)
    // private entity: Repository<ComerPenaltyEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric('comer_comission_served') public counter: Counter<string>,
  ) {}
}
