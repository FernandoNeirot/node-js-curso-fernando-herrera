import getAge from 'get-age';

export const getAgePlugin = (birthday: string): number => {
  if (!birthday) {
    throw new Error('Birthday is required');
  }
  return getAge(birthday);
};
