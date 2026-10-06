jest.mock('../../src/plugins', () => ({
  http: jest.fn(),
}));

import { http } from '../../src/plugins';
import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('Test in the 06-promises', () => {
  test('should return the pokemon name', async () => {
    const get = jest.fn().mockResolvedValue({ name: 'bulbasaur' });
    jest.mocked(http).mockReturnValue({
      get,
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    });

    const pokemon = await getPokemonById(1);

    expect(get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');
    expect(pokemon).toBe('bulbasaur');
  });

  test('should return an error if pokemon does not exist', async () => {
    const get = jest.fn().mockRejectedValue(new Error('Pokemon not found'));
    jest.mocked(http).mockReturnValue({
      get,
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    });

    await expect(getPokemonById(1000)).rejects.toThrow('Pokemon not found');
    expect(get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1000');
  });
});
