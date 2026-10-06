jest.mock('winston', () => {
  const log = jest.fn();
  const error = jest.fn();

  return {
    format: {
      combine: jest.fn(() => 'combined-format'),
      timestamp: jest.fn(() => 'timestamp-format'),
      json: jest.fn(() => 'json-format'),
    },
    createLogger: jest.fn(() => ({ log, error })),
    transports: {
      File: jest.fn(),
    },
    log,
    error,
  };
});

import winston from 'winston';
import buildLogger from '../../src/plugins/logger.plugin';

const winstonMock = winston as typeof winston & {
  log: jest.Mock;
  error: jest.Mock;
};

describe('Test in the logger plugin', () => {
  test('should log info and error messages for a service', () => {
    const logger = buildLogger('app.js');

    logger.log('Hola mundo');
    logger.error('Error de prueba');

    expect(winstonMock.log).toHaveBeenCalledWith('info', {
      message: 'Hola mundo',
      service: 'app.js',
    });
    expect(winstonMock.error).toHaveBeenCalledWith('error', {
      message: 'Error de prueba',
      service: 'app.js',
    });
  });
});
