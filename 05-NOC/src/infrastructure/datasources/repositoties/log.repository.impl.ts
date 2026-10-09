import { LogDatasource } from "../../../domain/datasource/log.datasource";
import { LogEntity, LogLevel } from "../../../domain/entities/log.entity";
import { LogRepository } from "../../../domain/repository/log.repositor";

export class LogRepositoryImpl implements LogRepository {
    constructor(private readonly logDatasource: LogDatasource) {

    }
    async saveLog(log: LogEntity): Promise<void> {
        this.logDatasource.saveLog(log);
    }
    async getLogs(level: LogLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLogs(level);
    }

}