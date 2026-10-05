import { http } from '../plugins';

export const getPokemonById = async (id: number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await http().get<{ name: string }>(url);

  return pokemon.name;
};
