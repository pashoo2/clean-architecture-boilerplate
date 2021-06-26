import {BaseAggregateRootAbstractClass} from 'src/aggregates/abstractClasses';
import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateType,
} from 'src/aggregates/interfaces';
import {IAggregateRootFabricParameters} from 'src/aggregates/interfaces/aggregateRootFabric';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export function aggregateClassFabric<
  Id extends TIdentityValueObject,
  Type extends TAggregateType,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
>({
  type,
  validateInstance,
  getTransferableProps,
}: IAggregateRootFabricParameters<Id, Type>): Constructor<
  IAggregateRoot<Id, Type, E>,
  [IBaseAggregateRootParameters<Id>, IBaseAggregateRootServices<E>]
> {
  class AggregateRootConstructor
    extends BaseAggregateRootAbstractClass<Id, Type, E>
    implements IAggregateRoot<Id, Type, E>
  {
    protected _type = type;
    public delete(): void {
      this._delete();
    }
    public getTransferableProps<T extends this>(
      this: T
    ): TPickTransferableProperties<T> {
      return getTransferableProps(this as IAggregateRoot<Id, Type, E>);
    }
    protected _validate(): void {
      validateInstance(this as IAggregateRoot<Id, Type, any>);
    }
  }
  // TODO - fix
  return AggregateRootConstructor;
}
