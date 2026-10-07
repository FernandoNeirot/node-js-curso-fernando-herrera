import { jest } from '@jest/globals';

describe('args plugin', () => {
  const originalArgv = process.argv;

  afterEach(() => {
    process.argv = originalArgv;
  });

  test('should return default values', async () => {
    process.argv = ['node', 'app.ts', '-b', '5'];

    await jest.isolateModulesAsync(async () => {
      const { yarg } = await import('../src/config/plugins/args.plugin.ts');

      expect(yarg).toEqual(expect.objectContaining({
        b: 5,
        base: 5,
        l: 10,
        limit: 10,
        s: false,
        show: false,
        n: 'table',
        name: 'table',
        d: './outputs',
        destination: './outputs',
      }));
    });
  });

  test('should return custom values', async () => {
    process.argv = ['node', 'app.ts', '-b', '8', '-l', '20', '-s', '-n', 'custom', '-d', 'custom-dir'];

    await jest.isolateModulesAsync(async () => {
      const { yarg } = await import('../src/config/plugins/args.plugin.ts');

      expect(yarg).toEqual(expect.objectContaining({
        b: 8,
        l: 20,
        s: true,
        n: 'custom',
        d: 'custom-dir',
      }));
    });
  });
});
