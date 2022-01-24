import { TAggregateRootImplementation, IBaseAggregateRootEventsList } from '../../aggregates/interfaces/aggregateRoot';
import { BaseEntity } from '../../entities/abstractClasses';
import { TIdentityValueObject } from '../../valueObjects/interfaces';
export declare abstract class BaseAggregateRootAbstractClass<Id extends TIdentityValueObject, Type extends string, E extends IBaseAggregateRootEventsList<Id, Type>> extends BaseEntity<Id, Type, E> implements TAggregateRootImplementation<Id, Type, E> {
    delete(): void;
}
