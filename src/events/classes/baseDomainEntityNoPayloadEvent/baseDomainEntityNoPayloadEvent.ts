import {BaseDomainEntityEvent} from 'src/events/classes/baseDomainEntityEvent';
import {IBaseDomainEntityEventParameters} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {IDomainEntityEvent} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IBaseDomainEntityNoPayloadEventParameters<
  Id extends TIdentityValueObject
> extends Omit<IBaseDomainEntityEventParameters<Id>, 'payload'> {}

export abstract class BaseDomainEntityNoPayloadEvent<
    Id extends TIdentityValueObject = TIdentityValueObject,
    Type extends string = string,
    N extends string = string
  >
  extends BaseDomainEntityEvent<Id, Type, N>
  implements IDomainEntityEvent<Id, Type, N>
{
  constructor(parameters: IBaseDomainEntityNoPayloadEventParameters<Id>) {
    super({...parameters, payload: undefined});
  }
}
