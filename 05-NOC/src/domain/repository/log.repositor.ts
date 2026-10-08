import { LogEntity, LogLevel } from "../entities/log.entity";

// abstract para no implementar el metodo saveLog
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(level: LogLevel): Promise<LogEntity[]>;
}
