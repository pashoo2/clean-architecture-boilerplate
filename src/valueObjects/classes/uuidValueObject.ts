import {BaseValueObjectStringSerialization} from 'src/valueObjects/interfaces/abstractClasses/baseValueObject';
import {IUuidVO} from 'src/valueObjects/interfaces/uuidValueObject';

export class UuidValueObject
  extends BaseValueObjectStringSerialization<string>
  implements IUuidVO
{
  protected _validate(): void {
    if (
      /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u.test(
        this.value
      )
    ) {
      throw new Error('The identity should be compatible to UUID v4 format');
    }
  }
}
