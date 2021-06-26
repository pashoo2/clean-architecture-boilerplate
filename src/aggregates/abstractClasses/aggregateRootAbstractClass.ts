import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateType,
} from 'src/aggregates/interfaces/aggregateRoot';
import {BaseEntity} from 'src/entities/abstractClasses';
import {TPickTransferableProperties} from 'src/interfaces';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseAggregateRootAbstractClass<
    Id extends TIdentityValueObject,
    Type extends TAggregateType,
    E extends IBaseAggregateRootEventsList<Id, Type>
  >
  extends BaseEntity<Id, Type, E>
  implements IAggregateRoot<Id, Type, E>
{
  constructor(
    parameters: IBaseAggregateRootParameters<Id>,
    services: IBaseAggregateRootServices<E>
  ) {
    super(parameters, services);
  }

  public equalsTo(anotherEntity: IAggregateRoot<Id, Type>): boolean {
    this.id.equalsTo(anotherEntity.id as unknown as );
  }

  public abstract getTransferableProps<T extends this>(
    this: T
  ): TPickTransferableProperties<T>;

  public abstract delete(): void;
}
