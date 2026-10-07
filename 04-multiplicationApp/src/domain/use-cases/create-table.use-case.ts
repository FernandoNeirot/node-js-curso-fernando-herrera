export interface CreateTableOptions {
  base: number;
  limit: number;
}
export interface CreateTableUseCase {
  execute(options: CreateTableOptions): string;
}
export class CreateTable implements CreateTableUseCase {
  constructor(
    // !injected dependencies
  ) {}

  execute({base, limit=10}: CreateTableOptions): string {
    let outputMessage = '';
    for (let i = 1; i <= limit; i++) {
        outputMessage += `${base} x ${i} = ${base * i}\n`;
      }
    return outputMessage;
  }
}
