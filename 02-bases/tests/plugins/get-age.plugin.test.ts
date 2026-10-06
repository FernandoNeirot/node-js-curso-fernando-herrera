jest.mock('get-age', () => jest.fn(() => 35));

import getAge from 'get-age';
import { getAgePlugin } from '../../src/plugins/get-age.plugin';

describe('Test in the get-age plugin', () => {
  test('should return the age', () => {
    const birthday = '1989-06-09';

    const age = getAgePlugin(birthday);

    expect(getAge).toHaveBeenCalledWith(birthday);
    expect(age).toBe(35);
  });

  test('should throw if birthday is empty', () => {
    expect(() => getAgePlugin('')).toThrow('Birthday is required');
  });
});
