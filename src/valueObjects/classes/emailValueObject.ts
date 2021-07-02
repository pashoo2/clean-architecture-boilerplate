import {BaseValueObjectStringSerialization} from '@root/valueObjects/interfaces/abstractClasses/baseValueObject';
import {IEmailVO} from '../interfaces/emailValueObject';

function getEmailValidationRegexp(): RegExp {
  // https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
}

export class EmailVO
  extends BaseValueObjectStringSerialization<string>
  implements IEmailVO
{
  protected _validate(): void {
    const trimmedEmail = this.value.trim();
    if (
      trimmedEmail.startsWith('.') ||
      trimmedEmail.includes('.@') ||
      trimmedEmail.includes('@.') ||
      trimmedEmail.includes(' ') ||
      trimmedEmail.includes('..') ||
      !/@.*\./.test(trimmedEmail) ||
      /@\d{3}\.\d{3}\.\d{3}\.\d{4,}/.test(trimmedEmail) ||
      !getEmailValidationRegexp().test(trimmedEmail)
    ) {
      throw new Error('The email is not valid');
    }
  }
}
