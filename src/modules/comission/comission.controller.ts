import { Controller, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { MessagePattern } from '@nestjs/microservices';

import { ComissionService } from './comission.service';


@Controller('comission')
export class ComissionController {
  constructor(
    private readonly service: ComissionService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
}
