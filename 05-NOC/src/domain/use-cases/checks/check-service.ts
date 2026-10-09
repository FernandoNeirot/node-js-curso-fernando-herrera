import { LogEntity, LogLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repositor";

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}
type SuccessCallBack = () => void;
type ErrorCallBack = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback?: SuccessCallBack,
    private readonly errorCallback?: ErrorCallBack,
  ) {}
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        return false;
      }
      const log = new LogEntity(`Service ${url} is running`, LogLevel.LOW);
      this.logRepository.saveLog(log);
      this.successCallback?.();
      return true;
    } catch (error) {
      const log = new LogEntity(`Service ${url} is not running`, LogLevel.HIGH);
      this.logRepository.saveLog(log);
      this.errorCallback?.(error as string);
      return false;
    }
  }
}
