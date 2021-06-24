import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateType,
} from 'src/aggregates/interfaces';
import {IAggregateRootFabricParameters} from 'src/aggregates/interfaces/aggregateRootFabric';
import {entityClassWithDeleteMethodFabric} from 'src/entities/fabrics';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export function aggregateClassFabric<
  Id extends TIdentityValueObject,
  Type extends TAggregateType,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
>(
  parameters: IAggregateRootFabricParameters<Id, Type>
): Constructor<
  IAggregateRoot<Id, Type, E>,
  [IBaseAggregateRootParameters<Id>, IBaseAggregateRootServices<E>]
> {
  class AggregateRootConstructor
    extends entityClassWithDeleteMethodFabric<Id, Type, E>(parameters)
    implements IAggregateRoot<Id, Type, E>
  {
    get isAggregate(): true {
      return true;
    }
    delete() {
      this.$delete();
    }
  }
  // TODO - fix
  return AggregateRootConstructor;
}
