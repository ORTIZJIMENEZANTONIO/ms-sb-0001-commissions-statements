import { Logger } from '@nestjs/common';
import { Counter } from 'prom-client';
export declare class ComissionService {
    private readonly logger;
    counter: Counter<string>;
    constructor(logger: Logger, counter: Counter<string>);
}
