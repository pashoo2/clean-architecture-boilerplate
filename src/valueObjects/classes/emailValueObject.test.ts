import {EmailVO} from 'src/valueObjects/classes/emailValueObject';

describe('Email value object', () => {
  it('Should return a new value object instance for a valid email string containing latin characters', () => {
    const expectedValue = 'valid@email.com';
    expect(new EmailVO('valid@email.com')).toEqual(
      expect.objectContaining({
        value: expectedValue,
      })
    );
  });
  it('Should throw an exception for a non string argument passed to the constructor', () => {
    expect(() => new EmailVO({} as any)).toThrow();
  });
  it('Should throw an exception for a non valid email string', () => {
    expect(() => new EmailVO('invalid email' as any)).toThrow();
  });
});
