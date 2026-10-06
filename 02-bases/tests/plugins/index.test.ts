jest.mock('../../src/plugins/get-id.plugin', () => ({
  getIdPlugin: jest.fn(),
}));
jest.mock('../../src/plugins/get-age.plugin', () => ({
  getAgePlugin: jest.fn(),
}));
jest.mock('../../src/plugins/http-client.plugin', () => ({
  http: jest.fn(),
}));
jest.mock('../../src/plugins/logger.plugin', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import { buildLogger, getAgePlugin, getIdPlugin, http } from '../../src/plugins';
import { getAgePlugin as agePlugin } from '../../src/plugins/get-age.plugin';
import { getIdPlugin as idPlugin } from '../../src/plugins/get-id.plugin';
import { http as httpPlugin } from '../../src/plugins/http-client.plugin';
import loggerPlugin from '../../src/plugins/logger.plugin';

describe('Test in the plugins index', () => {
  test('should export the plugins', () => {
    expect(getIdPlugin).toBe(idPlugin);
    expect(getAgePlugin).toBe(agePlugin);
    expect(http).toBe(httpPlugin);
    expect(buildLogger).toBe(loggerPlugin);
  });
});
