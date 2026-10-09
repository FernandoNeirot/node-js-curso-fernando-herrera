import { LogDatasource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogLevel } from "../../domain/entities/log.entity";
import fs from "fs";

export class FileSystemDatasource implements LogDatasource {
  private readonly logPath = "logs/";
  private readonly allLogsPath = "logs/logs-all.log";
  private readonly mediumLogsPath = "logs/logs-medium.log";
  private readonly highLogsPath = "logs/logs-high.log";

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach((path) => {
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "");
      }
    });
  };

  async saveLog(log: LogEntity): Promise<void> {
    const logAsJson = JSON.stringify(log);
    fs.appendFileSync(this.allLogsPath, `${logAsJson}\n`);
    switch (log.level) {
      case LogLevel.LOW:
        return;

      case LogLevel.MEDIUM:
        fs.appendFileSync(this.mediumLogsPath, `${logAsJson}\n`);
        return;
      case LogLevel.HIGH:
        fs.appendFileSync(this.highLogsPath, `${logAsJson}\n`);
        return;
    }
  }
  private getLogsFromPath(path: string): LogEntity[] {
    const logAsArray = fs.readFileSync(path, 'utf-8').split('\n').map(LogEntity.fromJson);
    return logAsArray.map(log => {
      return {
        level: log.level as LogLevel,
        message: log.message,
        createdAt: new Date(log.createdAt),
      }
    });
  }
   async getLogs(level: LogLevel): Promise<LogEntity[]> {
    const logAsArray = fs.readFileSync(this.allLogsPath, 'utf-8').split('\n').map(line => JSON.parse(line));
    switch(level){
      case LogLevel.LOW:
        return this.getLogsFromPath(this.allLogsPath);
      case LogLevel.MEDIUM:
        return this.getLogsFromPath(this.mediumLogsPath);
      case LogLevel.HIGH:
        return this.getLogsFromPath(this.highLogsPath);
    }
  }
}
