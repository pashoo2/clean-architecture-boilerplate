import { IDomainEvent } from '../../events/interfaces/domainEvents';
export interface IEventsList {
    [eventName: string]: IDomainEvent<typeof eventName, any>;
}
export declare type TGetEventsNames<E extends IEventsList> = E[keyof E] extends IDomainEvent<any> ? keyof E : never;
export declare type TGetEvents<E extends IEventsList> = E[keyof E];
