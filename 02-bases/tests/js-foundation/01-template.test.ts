import { emailTemplate } from "../../src/js-foundation/01-template";

describe('Test in the emailTemplate', () => {
  test('should contain a greeting', () => {    
    expect(emailTemplate).toContain('Hello');
  });
  test('should contain a name and order', () => {
    expect(emailTemplate).toContain('{{name}}');
    expect(emailTemplate).toContain('{{order}}');
  });

});