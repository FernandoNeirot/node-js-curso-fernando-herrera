import { jest } from '@jest/globals';

describe('App', () => {
  const originalArgv = process.argv;

  afterEach(() => {
    process.argv = originalArgv;
    jest.restoreAllMocks();
  });

  test('should run ServerApp with yarg values', async () => {
    process.argv = ['node', 'app.ts', '-b', '7', '-l', '3', '-s', '-n', 'file', '-d', 'out'];

    await jest.isolateModulesAsync(async () => {
      const { ServerApp } = await import('../src/presentation/server-app.ts');
      const runSpy = jest.spyOn(ServerApp, 'run').mockImplementation(() => undefined);

      await import('../src/app.ts');

      expect(runSpy).toHaveBeenCalledWith({
        base: 7,
        limit: 3,
        showTable: true,
        name: 'file',
        destination: 'out',
      });
    });
  });
});
