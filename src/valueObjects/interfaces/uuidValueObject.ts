import {IBaseValueObjectStringSerialization} from '@root/valueObjects/interfaces/baseValueObject';
import {IIdentityValueObjectSimple} from '@root/valueObjects/interfaces/identityValueObject';

export interface IUuidVO
  extends IBaseValueObjectStringSerialization<string>,
    IIdentityValueObjectSimple {}
