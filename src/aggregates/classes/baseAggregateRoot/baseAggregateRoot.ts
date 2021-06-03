import {IBaseAggregateRootEventsList} from 'src/aggregates/interfaces/aggregateRoot';
import {TGetEventsNames} from 'src/events/interfaces/events';
import {IDomainEventListener} from 'src/events/interfaces/domainEvents';
import {BaseAggregateRootAbstractClass} from 'src/aggregates/interfaces/aggregateRootAbstractClass';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseAggregateRoot<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseAggregateRootEventsList<Id, Type>
> extends BaseAggregateRootAbstractClass<Id, Type, E> {
  public delete(): void {
    this._delete();
  }

  public subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this._subscribe<N>(eventName, eventListener);
  }

  public unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this._unsubscribe<N>(eventName, eventListener);
  }
}
