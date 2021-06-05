import {BaseValueObjectStringSerialization} from 'src/valueObjects/interfaces/abstractClasses/baseValueObject';
import {IEmailVO} from '../interfaces/emailValueObject';

export class EmailVO
  extends BaseValueObjectStringSerialization<string>
  implements IEmailVO
{
  protected _validate(): void {
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.value
      )
    ) {
      throw new Error('The email is not valid');
    }
  }
}
