import { DiskHealthIndicator, HealthCheckService, MemoryHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private health;
    private dbIndicator;
    private memoryIndicator;
    private diskHealthIndicator;
    constructor(health: HealthCheckService, dbIndicator: TypeOrmHealthIndicator, memoryIndicator: MemoryHealthIndicator, diskHealthIndicator: DiskHealthIndicator);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
