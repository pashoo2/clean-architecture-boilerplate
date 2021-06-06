import {EmailVO} from 'src/valueObjects/classes/emailValueObject';

// https://www.w3resource.com/javascript/form/email-validation.php

const VALID_EMAILS_LIST = [
  'email@example.com',
  'firstname.lastname@example.com',
  'email@subdomain.example.com',
  'firstname+lastname@example.com',
  'email@123.123.123.123',
  // TODO '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
  // TODO 'much."more\\unusual"@example.com',
  // TODO 'email@[123.123.123.123]',
  // TODO 'very.unusual.”@”.unusual.com@example.com',
  // TODO 'very.”(),:;<>[]”.VERY.”very@\\"very”.unusual@strange.example.com',
];

const INVALID_EMAILS_LIST = [
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'あいうえお@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@-example.com',
  'email@111.222.333.44444',
  'email@example..com',
  'Abc..123@example.com',
  '"(),:;<>[]@example.com',
  'just”not”right@example.com',
  'this\\is"really"not\\allowed@example.com',
];

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

  it.each(VALID_EMAILS_LIST)(
    'Should not throw for email address "%s"',
    validEmailAddress => {
      expect(new EmailVO(validEmailAddress)).toEqual(
        expect.objectContaining({
          value: validEmailAddress,
        })
      );
    }
  );

  it.each(INVALID_EMAILS_LIST)(
    'Should throw for email address "%s"',
    validEmailAddress => {
      expect(() => new EmailVO(validEmailAddress)).toThrow();
    }
  );
});
