import {IDomainEvent} from 'src/events/interfaces/domainEvents';

export type TEventsList = {
  [eventName: string]: IDomainEvent<typeof eventName, any>;
};

export type TGetEventsNames<E> = E[keyof E] extends IDomainEvent<any>
  ? keyof E
  : never;

export type TGetEvents<E> = E[keyof E];
