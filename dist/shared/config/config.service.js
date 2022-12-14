"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('DB_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('DB_PASS'),
            database: this.getValue('POSTGRES_DB'),
            entities: ['dist/**/*.entity.js'],
            synchronize: false,
            ssl: false,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                },
            }
        };
    }
}
const configService = new ConfigService(process.env).ensureValues([
    'DB_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'DB_PASS',
    'POSTGRES_DB',
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map