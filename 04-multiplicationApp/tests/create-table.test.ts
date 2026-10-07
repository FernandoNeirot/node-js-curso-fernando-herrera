import { CreateTable, type CreateTableOptions } from '../src/domain/use-cases/create-table.use-case.ts';

describe('CreateTableUseCase', () => {
  test('should create the multiplication table', () => {
    const table = new CreateTable().execute({ base: 2, limit: 2 });

    expect(table).toBe('2 x 1 = 2\n2 x 2 = 4\n');
  });

  test('should use 10 as the default limit', () => {
    const table = new CreateTable().execute({ base: 3 } as CreateTableOptions);

    expect(table).toContain('3 x 1 = 3');
    expect(table).toContain('3 x 10 = 30');
    expect(table).not.toContain('3 x 11 = 33');
  });
});
