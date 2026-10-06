jest.mock('axios');

import axios from 'axios';
import { http } from '../../src/plugins/http-client.plugin';

describe('Test in the http-client plugin', () => {
  test('get should return the response data', async () => {
    jest.mocked(axios.get).mockResolvedValue({ data: { name: 'bulbasaur' } });
    const client = http({ Authorization: 'Bearer token' });

    const data = await client.get('https://pokeapi.co/api/v2/pokemon/1');

    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1', {
      headers: { Authorization: 'Bearer token' },
    });
    expect(data).toEqual({ name: 'bulbasaur' });
  });

  test('get should use empty headers by default', async () => {
    jest.mocked(axios.get).mockResolvedValue({ data: { ok: true } });

    const data = await http().get('/health');

    expect(axios.get).toHaveBeenCalledWith('/health', { headers: {} });
    expect(data).toEqual({ ok: true });
  });

  test('post, put and delete should resolve', async () => {
    const client = http();

    await expect(client.post('/items', { name: 'John' })).resolves.toBeUndefined();
    await expect(client.put('/items/1', { name: 'Jane' })).resolves.toBeUndefined();
    await expect(client.delete('/items/1')).resolves.toBeUndefined();
  });
});
