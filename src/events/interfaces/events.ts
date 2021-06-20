import {IDomainEvent} from 'src/events/interfaces/domainEvents';

export type TEventsList<N extends string = string> = Record<
  N,
  IDomainEvent<N, any>
>;

export type TGetEventsNames<E extends TEventsList<any>> = keyof E extends (
  E extends TEventsList<infer EventName> ? EventName : never
)
  ? keyof E
  : never;

export type TGetEvents<E extends TEventsList> = E[keyof E];
