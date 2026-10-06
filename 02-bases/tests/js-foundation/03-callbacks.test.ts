import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('Test in the 03-callbacks', () => {
  test('should return an error if user does not exist', () => {
    const id = 10;

    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
    });
  });

  test('should return John Doe', () => {
    const id = 1;

    getUserById(id, (error, user) => {
      expect(error).toBeNull();
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      });
    });
  });
});
