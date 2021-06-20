import {IDomainEventBus} from '../../events/interfaces/domainEventBus';
import {TEventsList} from '../../events/interfaces/events';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {BaseDomainEntityDeleteEvent} from '../../events/classes/baseDomainEntityDeleteEvent';
import {BaseDomainEntityCreateEvent} from '../../events/classes/baseDomainEntityConstructEvent';
import {TEntityType} from './entity';
import {IServiceGeneratorIdentifierUnique} from 'src/services/interfaces/domain/generators/identifiers';
import {IDomainEvent} from 'src/events/interfaces';

export interface IBaseEntityParameters<Id extends TIdentityValueObject> {
  id: Id;
  isDeleted: boolean;
}

export interface IBaseEntityEventsListCommonEvents<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> {
  [BaseDomainEntityDeleteEvent.eventName]: BaseDomainEntityDeleteEvent<
    EntityId,
    EntityType
  >;
  [BaseDomainEntityCreateEvent.eventName]: BaseDomainEntityCreateEvent<
    EntityId,
    EntityType
  >;
}

export interface IBaseEntityEventsList<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> extends IBaseEntityEventsListCommonEvents<EntityId, EntityType> {
  readonly [eventName: string]: IDomainEvent<typeof eventName>;
}

export interface IBaseEntityServices<E extends TEventsList> {
  domainEventBus: IDomainEventBus<E>;
  generateUniqueIdentifierString: IServiceGeneratorIdentifierUnique;
}
