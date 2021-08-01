import {BaseAggregateRootAbstractClass} from '@root/aggregates/abstractClasses';
import {
  IAggregateRootImplementation,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  TAggregateTypeMain,
} from '@root/aggregates/interfaces';
import {IAggregateRootClassFabricParameters} from '@root/aggregates/interfaces/aggregateRootFabric';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export function aggregateClassFabric<
  Id extends TIdentityValueObject,
  Type extends TAggregateTypeMain,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>,
  Instance extends IAggregateRootImplementation<
    Id,
    Type,
    E
  > = IAggregateRootImplementation<Id, Type, E>,
  Params extends IBaseAggregateRootParameters<Id> = IBaseAggregateRootParameters<Id>
>({
  type,
  getServices,
  validateInstance,
  getTransferableProps,
  compareEntitiesTypes,
  compareEntitiesIdentities,
}: IAggregateRootClassFabricParameters<Id, Type, E, Instance>): Constructor<
  Instance,
  [Params]
> {
  class AggregateRootConstructor
    extends BaseAggregateRootAbstractClass<Id, Type, E>
    implements IAggregateRootImplementation<Id, Type, E>
  {
    protected _type = type;

    constructor(parameters: Params) {
      super(parameters, getServices());
    }

    protected _validate(this: Instance): void {
      validateInstance(this);
    }

    protected _getTransferableProps(
      this: Instance
    ): TPickTransferableProperties<this> {
      const transferableProps = getTransferableProps(this);
      // TODO - resolve the type
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
  return AggregateRootConstructor as unknown as Constructor<
    Instance,
    [IBaseAggregateRootParameters<Id>]
  >;
}
