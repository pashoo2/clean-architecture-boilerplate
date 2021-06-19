import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from 'src/aggregates/interfaces/aggregateRoot';
import {TGetEventsNames} from 'src/events/interfaces/events';
import {IDomainEventListener} from 'src/events/interfaces/domainEvents';
import {BaseEntityAbstractClass} from 'src/entities/abstractClasses/baseEntityAbstractClass';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseAggregateRootAbstractClass<
    Id extends TIdentityValueObject,
    Type extends string,
    E extends IBaseAggregateRootEventsList<Id, Type>
  >
  extends BaseEntityAbstractClass<Id, Type, E>
  implements IAggregateRoot<Id, Type, E>
{
  constructor(
    parameters: IBaseAggregateRootParameters<Id>,
    services: IBaseAggregateRootServices<E>
  ) {
    super(parameters, services);
  }

  public abstract delete(): void;

  /**
   * A subscription on an event can only be done
   * through an aggregate
   *
   * @template N
   * @param {N} eventName
   * @param {IDomainEventListener<E[N]>} eventListener
   * @memberof BaseAggregateRoot
   */
  public abstract subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;

  public abstract unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;
}
