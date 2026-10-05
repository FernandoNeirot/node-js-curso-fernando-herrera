interface PersonInput {
  name: string;
  birthday: string;
  country: string;
}

interface BuildMakePersonDeps {
  getIdPlugin: () => string;
  getAgePlugin: (birthday: string) => number;
}

export const buildMakePerson = ({ getIdPlugin, getAgePlugin }: BuildMakePersonDeps) => {
  return ({ name, birthday, country }: PersonInput) => {
    return {
      id: getIdPlugin(),
      name,
      birthday,
      age: getAgePlugin(birthday),
      country,
    };
  };
};
