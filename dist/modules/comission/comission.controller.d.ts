import { Logger } from 'winston';
import { ComissionService } from './comission.service';
export declare class ComissionController {
    private readonly service;
    private readonly logger;
    constructor(service: ComissionService, logger: Logger);
}
