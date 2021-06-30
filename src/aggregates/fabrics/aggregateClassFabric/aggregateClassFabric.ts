import {BaseAggregateRootAbstractClass} from 'src/aggregates/abstractClasses';
import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateTypeMain,
} from 'src/aggregates/interfaces';
import {IAggregateRootClassFabricParameters} from 'src/aggregates/interfaces/aggregateRootFabric';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export function aggregateClassFabric<
  Id extends TIdentityValueObject,
  Type extends TAggregateTypeMain,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
>({
  type,
  validateInstance,
  getTransferableProps,
  compareEntitiesTypes,
  compareEntitiesIdentities,
}: IAggregateRootClassFabricParameters<Id, Type>): Constructor<
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
    protected _validate(this: IAggregateRoot<Id, Type, E>): void {
      validateInstance(this);
    }

    protected _getTransferableProps(
      this: IAggregateRoot<Id, Type, E>
    ): TPickTransferableProperties<this> {
      const transferableProps = getTransferableProps(this);
      return transferableProps as unknown as TPickTransferableProperties<this>;
    }

    protected _compareEntitiesIdentities(firstId: Id, secondId: Id): boolean {
      return compareEntitiesIdentities(firstId, secondId);
    }

    protected _compareEntitiesTypes(
      firstType: Type,
      secondType: Type
    ): boolean {
      return compareEntitiesTypes(firstType, secondType);
    }
  }
  // TODO - fix
  return AggregateRootConstructor as Constructor<
    IAggregateRoot<Id, Type, E>,
    [IBaseAggregateRootParameters<Id>, IBaseAggregateRootServices<E>]
  >;
}
