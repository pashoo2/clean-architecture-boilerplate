import {IDomainEventBus} from '../../events/interfaces/domainEventBus';
import {TEventsList} from '../../events/interfaces/events';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {BaseDomainEntityDeleteEvent} from '../../events/classes/baseDomainEntityDeleteEvent';
import {BaseDomainEntityCreateEvent} from '../../events/classes/baseDomainEntityConstructEvent';
import {TEntityType} from './entity';
import {IServiceGeneratorIdentifierUnique} from 'src/services/interfaces/domain/generators/identifiers';

export interface IBaseEntityParameters<Id extends TIdentityValueObject> {
  id: Id;
  isDeleted: boolean;
}

export interface IBaseEntityEventsList<
  Id extends TIdentityValueObject,
  Type extends TEntityType
> extends TEventsList {
  [BaseDomainEntityDeleteEvent.eventName]: BaseDomainEntityDeleteEvent<
    Id,
    Type
  >;
  [BaseDomainEntityCreateEvent.eventName]: BaseDomainEntityCreateEvent<
    Id,
    Type
  >;
}

export interface IBaseEntityServices<E extends TEventsList> {
  domainEventBus: IDomainEventBus<E>;
  generateUniqueIdentifierString: IServiceGeneratorIdentifierUnique;
}
