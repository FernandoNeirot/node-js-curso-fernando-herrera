import { heroes } from "../data/heroes";
export const findHeroById = (id: number) => {
  const hero = heroes.find((hero) => hero.id === id);
  return hero;
};
