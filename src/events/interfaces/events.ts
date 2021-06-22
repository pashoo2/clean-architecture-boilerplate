import {IDomainEvent} from 'src/events/interfaces/domainEvents';

export interface IEventsList {
  [eventName: string]: IDomainEvent<typeof eventName, any>;
}

export type TGetEventsNames<E extends IEventsList> =
  E[keyof E] extends IDomainEvent<any> ? keyof E : never;

export type TGetEvents<E extends IEventsList> = E[keyof E];
