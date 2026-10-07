import { jest } from '@jest/globals';
import fs from 'fs';
import { SaveFile } from '../src/domain/use-cases/save-file.use-case.ts';

describe('SaveFileUseCase', () => {
  const mkdirSpy = jest.spyOn(fs, 'mkdirSync');
  const writeFileSpy = jest.spyOn(fs, 'writeFileSync');
  const logSpy = jest.spyOn(console, 'log');
  const errorSpy = jest.spyOn(console, 'error');

  beforeEach(() => {
    mkdirSpy.mockImplementation(() => undefined);
    writeFileSpy.mockImplementation(() => undefined);
    logSpy.mockImplementation(() => undefined);
    errorSpy.mockImplementation(() => undefined);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should save the file with custom options', () => {
    const result = new SaveFile().execute({
      fileContent: 'hello',
      fileDestination: 'custom-output',
      fileName: 'custom-table',
    });

    expect(result).toBe(true);
    expect(mkdirSpy).toHaveBeenCalledWith('custom-output', { recursive: true });
    expect(writeFileSpy).toHaveBeenCalledWith('custom-output/custom-table.txt', 'hello');
  });

  test('should save the file with default options', () => {
    const result = new SaveFile().execute({ fileContent: 'hello' });

    expect(result).toBe(true);
    expect(mkdirSpy).toHaveBeenCalledWith('output', { recursive: true });
    expect(writeFileSpy).toHaveBeenCalledWith('output/table.txt', 'hello');
  });

  test('should return false when saving fails', () => {
    mkdirSpy.mockImplementation(() => {
      throw new Error('cannot create directory');
    });

    const result = new SaveFile().execute({ fileContent: 'hello' });

    expect(result).toBe(false);
    expect(errorSpy).toHaveBeenCalled();
    expect(writeFileSpy).not.toHaveBeenCalled();
  });
});
