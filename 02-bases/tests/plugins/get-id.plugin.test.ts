jest.mock('uuid', () => ({
  v4: jest.fn(() => 'ABC-123'),
}));

import { v4 as uuidv4 } from 'uuid';
import { getIdPlugin } from '../../src/plugins/get-id.plugin';

describe('Test in the get-id plugin', () => {
  test('should return a uuid', () => {
    const id = getIdPlugin();

    expect(uuidv4).toHaveBeenCalled();
    expect(id).toBe('ABC-123');
  });
});
