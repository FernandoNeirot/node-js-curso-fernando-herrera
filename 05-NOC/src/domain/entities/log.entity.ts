export enum LogLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class LogEntity {
  public level: LogLevel;
  public message: string;
  public createdAt: Date;

  constructor(level: LogLevel, message: string) {
    this.level = level;
    this.message = message;
    this.createdAt = new Date();
  }

  static fromJson(json: string): LogEntity {
    const { level, message, createdAt } = JSON.parse(json);
    const log = new LogEntity(level as LogLevel, message);
    log.createdAt = new Date(createdAt);
    return log;
    
  }
}

