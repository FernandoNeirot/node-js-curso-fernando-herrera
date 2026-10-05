import { v4 as uuidv4 } from 'uuid';

export const getIdPlugin = (): string => {
  return uuidv4();
};
