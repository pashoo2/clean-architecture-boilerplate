import {IDomainEventBus} from '../../events/interfaces/domainEventBus';
import {IEventsList} from '../../events/interfaces/events';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {BaseDomainEntityDeleteEvent} from '../../events/classes/baseDomainEntityDeleteEvent';
import {BaseDomainEntityCreateEvent} from '../../events/classes/baseDomainEntityConstructEvent';
import {IServiceGeneratorIdentifierUnique} from '@root/services/interfaces/domain/generators/identifiers';

export interface IBaseEntityParameters<Id extends TIdentityValueObject> {
  id: Id;
  isDeleted: boolean;
}

export type TBaseEntityEventsListCommonEvents<
  EntityId extends TIdentityValueObject,
  EntityType extends string
> = {
  [BaseDomainEntityDeleteEvent.eventName]: BaseDomainEntityDeleteEvent<
    EntityId,
    string
  >;
  [BaseDomainEntityCreateEvent.eventName]: BaseDomainEntityCreateEvent<
    EntityId,
    EntityType
  >;
};

export interface IBaseEntityEventsList<
  EntityId extends TIdentityValueObject,
  EntityType extends string
> extends TBaseEntityEventsListCommonEvents<EntityId, EntityType>,
    IEventsList {}

export interface IBaseEntityServices<E extends IEventsList> {
  domainEventBus: IDomainEventBus<E>;
  generateUniqueIdentifierString: IServiceGeneratorIdentifierUnique;
}
