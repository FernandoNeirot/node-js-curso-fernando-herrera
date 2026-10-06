describe('Test in the 02-destructuring', () => {
  const tableSpy = jest.spyOn(console, 'table').mockImplementation(() => {});

  afterEach(() => {
    tableSpy.mockClear();
  });

  afterAll(() => {
    tableSpy.mockRestore();
  });

  test('should log USERDOMAIN and PROCESSOR_ARCHITECTURE', () => {
    process.env.USERDOMAIN = 'FERNANDO';
    process.env.PROCESSOR_ARCHITECTURE = 'AMD64';

    jest.isolateModules(() => {
      require('../../src/js-foundation/02-destructuring');
    });

    expect(tableSpy).toHaveBeenCalledWith({
      USERDOMAIN: 'FERNANDO',
      PROCESSOR_ARCHITECTURE: 'AMD64',
    });
  });
});
