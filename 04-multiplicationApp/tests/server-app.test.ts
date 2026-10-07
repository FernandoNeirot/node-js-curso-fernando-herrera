import { jest } from '@jest/globals';
import { CreateTable } from '../src/domain/use-cases/create-table.use-case.ts';
import { SaveFile } from '../src/domain/use-cases/save-file.use-case.ts';
import { ServerApp } from '../src/presentation/server-app.ts';

describe('ServerApp', () => {
  const options = {
    base: 2,
    limit: 10,
    showTable: false,
    name: 'test-filename',
    destination: 'test-destination',
  };

  const logSpy = jest.spyOn(console, 'log');
  const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
  const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

  beforeEach(() => {
    logSpy.mockImplementation(() => undefined);
    createTableSpy.mockImplementation(() => '2 x 1 = 2');
    saveFileSpy.mockImplementation(() => true);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should create the table and save the file', () => {
    ServerApp.run(options);

    expect(logSpy).toHaveBeenCalledWith('server running...');
    expect(createTableSpy).toHaveBeenCalledWith({ base: 2, limit: 10 });
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: '2 x 1 = 2',
      fileDestination: 'test-destination',
      fileName: 'test-filename',
    });
    expect(logSpy).toHaveBeenCalledWith('File created successfully');
  });

  test('should log the table when showTable is true', () => {
    ServerApp.run({ ...options, showTable: true });

    expect(logSpy).toHaveBeenCalledWith('2 x 1 = 2');
  });

  test('should log when the file was not created', () => {
    saveFileSpy.mockImplementation(() => false);

    ServerApp.run(options);

    expect(logSpy).toHaveBeenCalledWith('File not created');
  });
});
