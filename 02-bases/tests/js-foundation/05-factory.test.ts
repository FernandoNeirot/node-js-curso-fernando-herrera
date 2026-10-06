import { buildMakePerson } from '../../src/js-foundation/05-factory';
import * as getAgePluginModule from '../../src/plugins/get-age.plugin';
import * as getIdPluginModule from '../../src/plugins/get-id.plugin';

describe('Test in the 05-factory', () => {
  const idSpy = jest.spyOn(getIdPluginModule, 'getIdPlugin').mockReturnValue('ABC-123');
  const ageSpy = jest.spyOn(getAgePluginModule, 'getAgePlugin').mockReturnValue(37);

  afterAll(() => {
    idSpy.mockRestore();
    ageSpy.mockRestore();
  });

  test('should return a person', () => {
    const makePerson = buildMakePerson({
      getIdPlugin: getIdPluginModule.getIdPlugin,
      getAgePlugin: getAgePluginModule.getAgePlugin,
    });

    const person = makePerson({
      name: 'John',
      birthday: '1989-06-09',
      country: 'USA',
    });

    expect(idSpy).toHaveBeenCalled();
    expect(ageSpy).toHaveBeenCalledWith('1989-06-09');
    expect(person).toEqual({
      id: 'ABC-123',
      name: 'John',
      birthday: '1989-06-09',
      age: 37,
      country: 'USA',
    });
  });
});
