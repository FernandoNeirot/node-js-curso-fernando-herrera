interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}
type SuccessCallBack = () => void;
type ErrorCallBack = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successCallback: SuccessCallBack,
    private readonly errorCallback: ErrorCallBack,
  ) {}
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        return false;
      }
      this.successCallback();

      return true;
    } catch (error) {
      this.errorCallback(error as string);
      return false;
    }
  }
}
