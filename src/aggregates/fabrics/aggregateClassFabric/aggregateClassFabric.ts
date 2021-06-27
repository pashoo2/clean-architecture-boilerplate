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
    public getTransferableProps(
      this: IAggregateRoot<Id, Type, E>
    ): TPickTransferableProperties<this> {
      return getTransferableProps(
        this
      ) as unknown as TPickTransferableProperties<this>; // TODO - fix
    }
    public equalsTo(anotherEntity: IAggregateRoot<Id, Type, E>): boolean {
      return true;
    }
    protected _validate(this: IAggregateRoot<Id, Type, E>): void {
      validateInstance(this);
    }
  }
  // TODO - fix
  return AggregateRootConstructor as Constructor<
    IAggregateRoot<Id, Type, E>,
    [IBaseAggregateRootParameters<Id>, IBaseAggregateRootServices<E>]
  >;
}
